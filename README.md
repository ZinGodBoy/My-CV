# Tạ Đăng Khôi — My-CV

> Website CV & Portfolio cá nhân của **Tạ Đăng Khôi**, sinh viên Công nghệ Thông tin tại Đại học Đại Nam, định hướng **Full-Stack Development, Web Development và UI/UX Design**.

[![Website](https://img.shields.io/badge/Website-GitHub%20Pages-0ea5e9?style=for-the-badge)](https://zingodboy.github.io/My-CV/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)](https://developer.mozilla.org/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square&logo=github)](https://pages.github.com/)

---

## 1. Giới thiệu

**My-CV** là một website portfolio tĩnh được xây dựng để:

- Giới thiệu bản thân, quá trình học tập và định hướng nghề nghiệp.
- Trình bày kỹ năng CNTT và các dự án cá nhân.
- Thực hành HTML, CSS, JavaScript và Responsive Web Design.
- Rèn luyện Git/GitHub, tổ chức repository và quy trình phát triển.
- Làm sản phẩm portfolio có thể tiếp tục mở rộng trong tương lai.

## 2. Chức năng chính

- **Trang chủ:** thông tin nhận diện, giới thiệu ngắn và CTA.
- **Giới thiệu:** nền tảng học tập và mục tiêu nghề nghiệp.
- **Kỹ năng:** HTML5, CSS3, JavaScript, Responsive, UI/UX, Git, GitHub và VS Code.
- **Dự án:** trình bày các sản phẩm/thực hành cá nhân.
- **Liên hệ:** email, GitHub và các kênh mạng xã hội.
- **Theme:** chuyển đổi Light/Dark và lưu lựa chọn trên trình duyệt.
- **Responsive:** tối ưu cho desktop, tablet và mobile.
- **Tương tác:** navigation mobile, hover/transition và các thành phần JavaScript.

## 3. Công nghệ

| Công nghệ | Vai trò |
|---|---|
| HTML5 | Cấu trúc và semantic markup |
| CSS3 | Layout, responsive, animation và theme |
| JavaScript | DOM, navigation, theme và tương tác |
| Git | Quản lý phiên bản |
| GitHub | Repository, collaboration và Pages |
| Docker + Nginx | Chạy website tĩnh trong container |
| GitHub Actions | Tự động triển khai GitHub Pages |

## 4. Cấu trúc repository

```text
My-CV/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── assets/
│   ├── css/
│   │   └── style.css
│   └── images/
│       ├── anhtoi2.webp
│       ├── avatar.png
│       ├── facebook.png
│       ├── instagram.png
│       └── twitter.png
├── docs/
│   ├── screenshots/
│   ├── AI_LOG.md
│   ├── RELEASENOTE.md
│   └── test_report.md
├── js/
│   └── app.js
├── index.html
├── Dockerfile
├── compose.yaml
├── .gitignore
├── README.md
└── RELEASENOTE.md
```

## 5. Chạy dự án

### Cách 1 — Mở trực tiếp

Mở `index.html` bằng trình duyệt.

### Cách 2 — VS Code + Live Server

Mở thư mục bằng VS Code, sau đó chạy `index.html` với Live Server.

### Cách 3 — Python HTTP Server

```bash
python -m http.server 8080
```

Mở `http://localhost:8080`.

### Cách 4 — Docker

```bash
docker build -t my-cv .
docker run --rm -p 8080:80 my-cv
```

Mở `http://localhost:8080`.

### Cách 5 — Docker Compose

```bash
docker compose up -d --build
```

Dừng:

```bash
docker compose down
```

## 6. Git workflow

Quy trình phát triển:

```text
Plan → Code → Test → Commit → Push → Review → Release
```

Commit nên mô tả đúng thay đổi, ví dụ:

```text
feat: improve responsive navigation
fix: correct theme persistence
docs: update testing report
ci: add github pages deployment
```

Repository đã có lịch sử commit thể hiện quá trình phát triển; các commit mới được đặt tên theo loại thay đổi để dễ theo dõi.

## 7. Kiểm thử và minh chứng

Tài liệu kiểm thử nằm trong `docs/test_report.md`, gồm:

- Kiểm tra chức năng.
- Kiểm tra giao diện và responsive.
- Kiểm tra Chrome/Edge.
- Kiểm tra console và tài nguyên.
- Kiểm tra cấu trúc repository.
- Kiểm tra triển khai.
- Minh chứng screenshot Mobile/Tablet/Desktop.

Nhật ký sử dụng AI được ghi tại `docs/AI_LOG.md` để minh bạch quá trình hỗ trợ và chỉnh sửa.

## 8. Release

Phiên bản hiện tại: **v1.0 — 05/11/2026**.

Chi tiết thay đổi: xem [RELEASENOTE.md](./RELEASENOTE.md).

## 9. Thông tin cá nhân

**Tạ Đăng Khôi**  
Sinh viên ngành Công nghệ Thông tin — Đại học Đại Nam

**Định hướng:** Full-Stack Developer · Web Developer · UI/UX Designer

**Email:** dangkhoita2@gmail.com  
**GitHub:** https://github.com/ZinGodBoy  
**Repository:** https://github.com/ZinGodBoy/My-CV

## 10. License

Dự án được xây dựng cho mục đích học tập, xây dựng portfolio và giới thiệu năng lực cá nhân.

---

<div align="center">

### Tạ Đăng Khôi

**Full-Stack Developer & UI/UX Designer**

HTML • CSS • JavaScript • Git • GitHub

</div>
