
// //Houses list
// let houses = [
//     {ID:'HOUSE0001', hinhanh:'/images/nha1.jpg', dientich: 1000, diadiem:'Ho Chi Minh', sophongngu: 4, sophongtam: 4, giaban: 1000000000},
//     {ID:'HOUSE0002', hinhanh:'/images/nha2.jpg', dientich: 800, diadiem: 'Ha Noi', sophongngu: 3, sophongtam: 2, giaban: 800000000},
//     {ID:'HOUSE0003', hinhanh:'/images/nha3.jpg', dientich: 1200, diadiem: 'Da Nang', sophongngu: 5, sophongtam: 3, giaban: 1500000000},
//     {ID:'HOUSE0004', hinhanh:'/images/nha4.jpg', dientich: 600, diadiem: 'Ho Chi Minh', sophongngu: 2, sophongtam: 1, giaban:600000000},
//     {ID:'HOUSE0005', hinhanh:'/images/nha5.jpg', dientich: 900, diadiem: 'Hai Phong', sophongngu: 4, sophongtam: 2, giaban:1200000000},
//     {ID:'HOUSE0006', hinhanh:'/images/nha6.jpg', dientich: 700, diadiem: 'Can Tho', sophongngu: 3, sophongtam: 2, giaban:900000000},
//     {ID:'HOUSE0007', hinhanh:'/images/nha7.jpg', dientich: 1000, diadiem: 'Quang Ninh', sophongngu: 4, sophongtam: 3, giaban: 1300000000},
//     {ID:'HOUSE0008', hinhanh:'/images/nha8.jpg', dientich: 850, diadiem: 'Vinh', sophongngu: 3, sophongtam: 2, giaban: 850000000},
//     {ID:'HOUSE0009', hinhanh:'/images/nha9.jpg', dientich: 1100, diadiem: 'Buon Ma Thuot', sophongngu: 4, sophongtam: 3, giaban: 1100000000},
//     {ID:'HOUSE0010', hinhanh:'/images/nha10.jpg', dientich: 950, diadiem: 'Nha Trang', sophongngu: 3, sophongtam: 2, giaban:950000000},
//     {ID:'HOUSE0011', hinhanh:'/images/nha11.jpg', dientich: 1000, diadiem:'Ha Noi', sophongngu: 4, sophongtam: 4, giaban: 1000000000},
//     {ID:'HOUSE0012', hinhanh:'/images/nha12.jpg', dientich: 1200, diadiem:'Ho Chi Minh', sophongngu: 3, sophongtam: 3, giaban: 1200000000},
//     {ID:'HOUSE0013', hinhanh:'/images/nha13.jpg', dientich: 900, diadiem:'Da Nang', sophongngu: 2, sophongtam: 2, giaban:900000000},
//     {ID:'HOUSE0014', hinhanh:'/images/nha14.jpg', dientich: 1500, diadiem:'Nha Trang', sophongngu: 5, sophongtam: 5, giaban:2500000000},
//     {ID:'HOUSE0015', hinhanh:'/images/nha15.jpg', dientich: 800, diadiem:'Can Tho', sophongngu: 3, sophongtam: 2, giaban:800000000},
//     {ID:'HOUSE0016', hinhanh:'/images/nha16.jpg', dientich: 1100, diadiem:'Hai Phong', sophongngu: 4, sophongtam: 3, giaban: 1300000000},
//     {ID:'HOUSE0017', hinhanh:'/images/nha17.jpg', dientich: 1300, diadiem:'Vung Tau', sophongngu: 3, sophongtam: 3, giaban: 1800000000},
//     {ID:'HOUSE0018', hinhanh:'/images/nha18.jpg', dientich: 950, diadiem:'Quang Ninh', sophongngu: 4, sophongtam: 2, giaban:1100000000},
//     {ID:'HOUSE0019', hinhanh:'/images/nha19.jpg', dientich: 850, diadiem:'Hue', sophongngu: 2, sophongtam: 1, giaban: 750000000},
//     {ID:'HOUSE0020', hinhanh:'/images/nha20.jpg', dientich: 1600, diadiem:'Phu Quoc', sophongngu: 5, sophongtam: 4, giaban:2300000000},
// ];

// function output(houses) {
//     let tableHTML =
//     `<style>
//         table {
//             width: 70%;
//             margin: 0 auto;
//         }
//         th, td {
//             padding: 8px;
//             text-align: center;
//             border-bottom: 1px solid #ddd;
//         }
//         img{
//             width:100px;
//             height:100px;
//         }
//     </style>
//     <table border="2">
//         <tr>
//             <th>ID</th>
//             <th>Ảnh</th>
//             <th>Địa điểm</th>
//             <th>Diện tích</th>
//             <th>Số phòng ngủ</th>
//             <th>Số phòng tắm</th>
//             <th>Giá bán</th>
//         </tr>`;

//     houses.forEach(home => {
//         tableHTML +=
//             `<tr>
//             <td>${home.ID}</td>
//             <td><img src="${home.hinhanh}"></td>
//             <td>${home.diadiem}</td>
//             <td>${home.dientich} m</td>
//             <td>${home.sophongngu}</td>
//             <td>${home.sophongtam}</td>
//             <td>${home.giaban.toLocaleString()} VND</td>
//         </tr>`;
//     });

//     tableHTML += `</table>`;

//     return tableHTML;
// }

// function addHouses(housesToAdd) {
//     houses.push(...housesToAdd);
// }

// // List Houses
// function getHousesList(req, res) {
//     let maxID = 0;
//     for (let i = 0; i < houses.length; i++) {
//         const homeID = parseInt(houses[i].ID.substring(5));
//         if (homeID > maxID) {
//             maxID = homeID;
//         }
//     }

//     res.send(output(houses));
// }

// // Add Houses
// function addNewHouses(dientich, diadiem, sophongngu, sophongtam, giaban, hinhanh) {
    
//     let maxID = 0;
//     for (let i = 0; i < houses.length; i++) {
//         const homeID = parseInt(houses[i].ID.substring(5));
//         if (homeID > maxID) {
//             maxID = homeID;
//         }
//     }
//     const newId = 'HOUSE' + String(maxID + 1).padStart(5, '0');
//     let newItem = {ID: newId, dientich, diadiem, sophongngu, sophongtam, giaban, hinhanh };

//     houses.push(newItem);
// }


// // Update houses
// function updateHouses(req, res) {
//     const newDiaDiem = req.body.diadiem;
//     const newDienTich = req.body.dientich;
//     const newSoPhongNgu = req.body.sophongngu;
//     const newSoPhongTam = req.body.sophongtam;
//     const newGiaBan = req.body.giaban;

//     const house = houses.find(home => home.ID === req.body.ID);
//     if (!house) {
//         res.status(400).json({ message: "House not found" });
//         return;
//     }

//     house.diadiem = newDiaDiem;
//     house.dientich = newDienTich;
//     house.sophongngu = newSoPhongNgu;
//     house.sophongtam = newSoPhongTam;
//     house.giaban = newGiaBan;

//     res.json({ message: "House updated successfully" });
// }


// // Delete houses
// function deleteHouses(req, res) {
//     const idToDelete = req.params.id;
//     const indexToDelete = houses.findIndex(home => home.ID === idToDelete);

//     if (indexToDelete !== -1) {
//         houses.splice(indexToDelete, 1);
//         res.send(`Xóa phần tử ${idToDelete} thành công <br><br>${output(houses)}`);
//     } else {
//         res.status(404).send(`Không tìm thấy phần tử có mã ${idToDelete}`);
//     }
// }


// module.exports = {
//     output,
//     addHouses,
//     houses,
//     getHousesList,
//     addNewHouses,
//     updateHouses,
//     deleteHouses
// };