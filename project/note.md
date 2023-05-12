# Dự án web nghe nhạc

- Client Side Rendering (Single Page Application = SPA)
- Webpack
- Npm
- Routing => Đường dẫn
- API có sẵn
- Giao diện: https://netease1.vercel.app/
- CSS Framework: Bootstrap
  Nên nghiên cứu thêm: Ant Design, MUI

Các bước chạy:

- Git clone
- Cd vào folder project
- Chạy lệnh npm install hoặc npm i
- Chạy lệnh npm start để khởi động server

Request: public/index.html => public/index.bundle.js => src/index.js => src/App.js => Các file component liên quan

State => Trạng thái => Khi state thay đổi => tự động re-render

## Phân tích cấu trúc folder

1. Assets

- Styles
- Images
- Fonts

2. Components: Các components dùng chung cho nhiều module (Gọi là Global Components)

- Mỗi components sẽ nằm trong 1 folder
- Trong folder sẽ có thể có 1 hoặc nhiều file js
- Trong folder có thể có file style (css hoặc scss)

3. Pages: Các components theo từng trang (Phụ thuộc vào routes)

- Cấu trúc components giống y hệt như ý 2

4. Services

- Chứa các hàm, thư viện tự xây dựng theo Project
- Quản lý các Global State

Middleware => Lớp trung gian từ Route vào tới components

Route => Middleware => Component

Xây dựng từng components theo giao diện

const element = <button onClick={abc}>Click</button>

const btn = documnent.createElement('button');
btn.innerText = 'Click'
btn.onclick = abc;

=> Template
