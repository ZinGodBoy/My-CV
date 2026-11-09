# Release Notes — My-CV

## v1.2.0 — 09/11/2026

### ✨ Added
- Bổ sung SEO metadata, description và Open Graph metadata.
- Thêm skip-link hỗ trợ accessibility và bàn phím.
- Thêm thanh tiến trình cuộn trang.
- Tự động đồng bộ menu điều hướng theo section hiện tại.
- Hiển thị trạng thái ONLINE/OFFLINE theo kết nối trình duyệt.
- Tách enhancement JavaScript thành `js/portfolio-enhancements.js`.

### 🔧 Improved
- Chuẩn hóa liên kết mạng xã hội với `target="_blank"` và `noopener noreferrer`.
- Giữ `app.js` ổn định, các tính năng mới được bổ sung theo module riêng.
- Hoàn thiện quy trình cập nhật qua branch + Pull Request.

### 🧪 Verification
- Pull Request #3 đã được merge vào `main`.
- Commit release: `b5bd0df`.
- Không thay đổi backend hoặc database.

---


> Lịch sử các phiên bản và thay đổi chính của website CV & Portfolio cá nhân Tạ Đăng Khôi.

## v1.1.0 — 06/11/2026

### ✨ Added
- Bổ sung Contact Form trong section 04 — CONTACT.
- Thêm Họ và tên, Email, Chủ đề và Nội dung.
- Thêm bộ đếm ký tự.
- Thêm validation phía client và lỗi theo từng trường.
- Thêm chức năng tạo email bằng mailto.
- Thêm trạng thái xử lý và thông báo sau khi form hợp lệ.

### 🎨 UI/UX
- Nâng cấp Contact Form theo phong cách premium.
- Glassmorphism, gradient, glow và grid background.
- Cải thiện border, shadow, focus và hover state.
- Thêm shine animation cho nút gửi.
- Responsive cho desktop, tablet và mobile.
- Đồng bộ Light/Dark Theme.

### 🔐 Security / Privacy
- Form không có backend/database.
- Không lưu dữ liệu nhập vào database.
- Không đưa API key, mật khẩu hoặc credential vào source.
- Có giới hạn độ dài input và validation phía client.

### 🧪 Verification
- Contact Form desktop: PASS.
- Contact Form mobile: PASS.
- Validation: PASS.
- Character counter: PASS.
- Light Theme: PASS.
- Dark Theme: PASS.
- Responsive layout: PASS.

## v1.0.0 — 05/11/2026

### ✨ Added
- Personal CV & Portfolio website.
- Home, About, Skills, Projects và Contact.
- Light/Dark Theme.
- Responsive navigation.
- Portfolio project cards.
- GitHub Pages deployment.
- Docker/Nginx và Docker Compose configuration.
- GitHub Actions workflow.

### 🛠️ Improved
- Repository structure.
- README, AI log, test report và release documentation.
- Git workflow.

### 🐛 Fixed
- Chuẩn hóa asset paths.
- Cải thiện responsive layout.
- Làm rõ hướng dẫn chạy và triển khai.

### ⚠️ Known Limitations
- Contact Form sử dụng mailto thay vì backend/API.
- Có thể tối ưu thêm hình ảnh.
- Có thể bổ sung automated accessibility/HTML validation.
- Nội dung portfolio sẽ tiếp tục được cập nhật.

### 🔜 Next
- Bổ sung project case study thực tế.
- Tối ưu SEO và accessibility.
- Thêm Lighthouse/HTML validation vào CI.
- Tối ưu responsive images.

<div align="center">

**My-CV — Tạ Đăng Khôi**

> Build • Learn • Improve • Repeat

</div>