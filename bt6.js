
let tenSachGoc = prompt("Nhập tên sách:");
let soThuTu = prompt("Nhập số thứ tự của sách trong thư viện:");
let tenSachChuanHoa = tenSachGoc.trim().toUpperCase();
let maSach = `LIB- ${tenSachChuanHoa} - ${soThuTu}`;

console.log(`Tên sách gốc: ${tenSachGoc}`);
console.log(`Mã sách sau chuẩn hóa: ${maSach}`);
