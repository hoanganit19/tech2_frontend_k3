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

Vòng lặp

Đoạn chương trình được lặp lại theo 1 số lần xác định hoặc không xác định (Dựa vào biểu thức) để thực hiện 1 bài toán

1. Vòng lặp for: Lặp với số lần lặp xác định trước

- Vòng lặp for tăng
- Vòng lặp for giảm
- Vòng lặp lồng nhau

2. Vòng lặp while và do while: Lặp với số lần lặp không xác định trước

- while => Kiểm tra điều kiện trước sau đó thực hiện chương trình
- do while => Thực hiện chương trình trước rồi kiểm tra điều kiện

=> Ngoài ra: Các kiểu dữ liệu khác nhau sẽ có các vòng lặp khác nhau (Array)

# DOM

Các thao tác với DOM:

- Thay đổi nội dung các thẻ html
- Thêm nội dung vào thẻ html
- Xóa nội dung thẻ html
- Xóa thẻ html
- Thêm thẻ html
- Thay đổi thẻ html
- Thêm, sửa, xóa các thuộc tính thẻ html
- Chính sửa CSS (Inline) của thẻ html

## Dom Navigation

- Lên cấp cha: parentElement
- Xuống cấp con: chilren, node.querySelector() hoặc node.querySelectorAll()
- Next tới 1 element ngang hàng: nextElementSibling
- Prev 1 element ngang hàng: previousElementSibling