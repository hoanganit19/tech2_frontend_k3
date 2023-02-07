- html - css
- bootstrap
- cắt psd

Thiếu:

- SCSS
- Javascript
- Dự án

Javascript

Quy tắc đặt tên:

1. camelCase: đặt tên biến, tên hàm

1.1: Biến
customerName
customerFirstName
customerLastName

1.2: Hàm
getName()
getCustomerName()

2. PascalCase: Dùng đặt tên Class

CustomerFirstName

class HomeController{

}

class OrderOverview{

}

3. undercore

- Đặt tên các thuộc tính của object
- Thiết kế API

Ví dụ: first_name, last_name, shipping_address, age,...

const customers = {
first_name: "Hoàng An",
last_name: "Tạ",
shipping_address: "Hà Nội",
age: 31
}

Định nghĩa hàm

Cú pháp:

function tenHam(){
//Nội dung hàm
}

Hàm sẽ chia thành các loại:

- Hàm có tham số
- Hàm không tham số
- Hàm có giá trị trả về (Hàm return)
- Hàm không có giá trị trả về (Hàm void)
- Hàm ẩn danh (Hàm không tên)

Khi làm việc với hàm, biến chia thành 2 loại:

- Biến toàn cục (global variable)
- Biến cục bộ (local variable)

Lưu ý với hàm return:

- Sau từ khóa return => Các đoạn code phía dưới sẽ không hoạt động

Hàm không tên, ẩn danh, anonymous function

- Gán vào 1 biến
- Kiểu dữ liệu sẽ trả về dạng function
- Định nghĩa hàm trước khi gọi
