# AI Change Log — My-CV

> Nhật ký ghi nhận các thay đổi đáng kể có sự hỗ trợ của AI trong quá trình phát triển My-CV.

## 🎯 Mục đích

AI được sử dụng như công cụ hỗ trợ học tập và phát triển. Người thực hiện vẫn kiểm tra, lựa chọn, chỉnh sửa và kiểm thử trước khi đưa thay đổi vào repository.

---

## [06/11/2026] — Contact Form & Premium UI

### Thay đổi
- Bổ sung Contact Form trong section 04 — CONTACT.
- Thêm Họ và tên, Email, Chủ đề và Nội dung.
- Thêm validation phía client.
- Thêm thông báo lỗi theo từng trường.
- Thêm bộ đếm ký tự.
- Thêm mailto để tạo email.
- Nâng cấp CSS với glassmorphism, gradient, glow, focus/hover state và shine animation.
- Responsive cho desktop, tablet và mobile.
- Đồng bộ Light/Dark Theme.

### AI hỗ trợ
- Phân tích cách tổ chức form.
- Gợi ý UX cho input và validation.
- Hỗ trợ viết CSS component.
- Hỗ trợ xử lý JavaScript validation.
- Rà soát responsive behavior.

### Kiểm tra
- Kiểm tra cấu trúc form.
- Kiểm tra validation.
- Kiểm tra responsive.
- Kiểm tra luồng tạo email.

### Kết quả
Contact section có thêm chức năng tương tác thực tế và giao diện đồng bộ hơn với portfolio.

> Form hiện không có backend. Chức năng gửi sử dụng mailto và phụ thuộc email client trên thiết bị.

---

## [06/11/2026] — Documentation Update

### Thay đổi
- Cập nhật README theo chức năng thực tế.
- Bổ sung mô tả Contact Form.
- Bổ sung UI/UX, responsive và workflow.
- Cập nhật release documentation.
- Cập nhật test report.

### AI hỗ trợ
- Rà soát nội dung documentation.
- Đề xuất cấu trúc tài liệu.
- Kiểm tra tính nhất quán giữa source và documentation.

---

## [05/11/2026] — Repository & Documentation v1.0

### Thay đổi
- Rà soát cấu trúc repository.
- Chuẩn hóa README.
- Bổ sung .gitignore.
- Bổ sung Dockerfile và Docker Compose.
- Bổ sung GitHub Actions.
- Hoàn thiện test report.
- Hoàn thiện release documentation.

### AI hỗ trợ
- Phân tích cấu trúc source.
- Gợi ý tổ chức repository.
- Hỗ trợ documentation và deployment workflow.

### Kết quả
Repository có cấu trúc rõ ràng hơn, có documentation, test report và workflow triển khai.

---

## [04/11/2026] — Hoàn thiện giao diện

### Thay đổi
- Hoàn thiện HTML/CSS/JavaScript.
- Bổ sung responsive layout.
- Hoàn thiện Light/Dark Theme.
- Hoàn thiện Home, About, Skills, Projects và Contact.

### AI hỗ trợ
- Gợi ý UI/UX.
- Hỗ trợ responsive layout.
- Hỗ trợ JavaScript.
- Hỗ trợ rà soát lỗi giao diện.

---

## 📋 Quy tắc ghi log

Với mỗi thay đổi lớn nên ghi:
1. Ngày thay đổi.
2. Tên thay đổi.
3. Nội dung.
4. Phạm vi AI hỗ trợ.
5. Phần người thực hiện kiểm tra.
6. Kết quả.

Không cần ghi các thay đổi cực nhỏ như sửa typo.

---

## 🎓 Trách nhiệm học thuật

AI không thay thế toàn bộ quá trình thực hiện dự án.

Người thực hiện có trách nhiệm:
- Hiểu code được sử dụng.
- Kiểm tra output trước khi commit.
- Test chức năng thực tế.
- Chỉnh sửa phần chưa phù hợp.
- Không đưa thông tin sai vào documentation.
- Không đưa secret hoặc credential vào repository.
