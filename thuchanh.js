//khai baos cac bien can thiet
let bookName = "lap trinh FE voi javascript"; // ten sach
let authorName = "nguyen van a";// ten tac gia
let publish = 2020;// nam xuat ban
let price = 100000;// gia cua 1 cuon sach
let quantity = 100;// so luong trong kho

// xay dung cac chuc nang theo yeu cau
//Chuẩn hóa dữ liệu:
//- Tên sách: Loại bỏ khoảng trắng thừa ở 2 đầu (trim) và chuyển tất cả thành chữ in hoa.
console.log("ten sach sau khi chuyen hoa: ", bookName.trim().toUpperCase());

//- Tên tác giả: Chuyển thành chữ in hoa.
console.log("ten tac gia sau khi chuyen hoa: ", authorName.toUpperCase());

//Tạo mã định danh (Book ID):
//Tạo mã định danh (Book ID):
//- Mã sách được tạo tự động theo công thức: 3 ký tự đầu của Tên tác giả + Năm xuất bản + một số ngẫu nhiên từ 1 đến 1000.
//- Ví dụ: Tác giả "NGUYEN VAN A", năm "2020", số ngẫu nhiên "123" -> Mã sách: "NGU2020-123"
console.log("3 ki tu dau cua ten tac gia: ", authorName.slice(0, 3));
console.log("nam xuat ban: ", publish);
console.log("so ngau nhien tu 1 den 1000: ", Math.ceil(Math.random()*100));

let bookID = `${authorName.slice(0, 3)}${publish} - ${Math.ceil(Math.random()*100)}`
console.log("Ma sach ngau nhien: ",bookID);

//Tính toán số liệu:
//- Tuổi của sách: Tính xem sách đã xuất bản được bao nhiêu năm (Lấy năm hiện tại là 2026 trừ đi Năm xuất bản).
// lay ra nam hien tai
let year = new Date().getFullYear();
let Month = new Date().getMonth()+1;
let Day = new Date().getDate();
let Minite = new Date().getMinutes();
console.log("year: ", year);

// tuoi cua sach
let bookAge = year - publish;
console.log("tuoi cua sach: ", bookAge);

//- Tổng giá trị nhập kho: Giá tiền x Số lượng.
let totalPrice = price * quantity;
console.log("tong gia tri nhap kho: ", totalPrice);

	// in ra --- PHIẾU NHẬP KHO ---
console.log(
    `Mã sách: ${bookID}
   Tên sách: ${bookName.trim().toUpperCase()}
   Tác giả: ${authorName().toUpperCase()}
   Năm xuất bản: ${publish()}
   Tuổi sách: ${bookAge} 
   Tổng giá trị: ${totalPrice} vnd
   Ngăn kệ gợi ý: ${Math.ceil(Math.random() *10)}`

);




