const express = require('express');
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
// const router = express.Router();
const path = require('path');
const app = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydatabases'; 
const collectionName = 'Houses';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));



// app.use(fileUpload({
//     createParentPath: true
// }));


app.use('/', express.static(path.join(__dirname, 'public/pages')));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home.html')
});


// Create Houses
app.post('/CreateHouses', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const houses = req.body;
        console.log(houses);

        console.log('start inserting to db...');
        housesCollection = await client.db(dbName).collection(collectionName);
        await housesCollection.insertMany(houses);

        const content = `${houses.length} houses created successfully`;
        res.json({ message: content });

    }catch (err) {
        console.error('Error:', err);
    } finally {
        if(client) {
            await client.close();
            console.log('MogoDB connection closed');
        }
    }

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))