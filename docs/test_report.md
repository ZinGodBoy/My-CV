# BÁO CÁO KIỂM THỬ — MY-CV

## 1. Thông tin chung

| Hạng mục | Nội dung |
|---|---|
| Dự án | My-CV — Personal CV & Portfolio |
| Chủ sở hữu | Tạ Đăng Khôi |
| Phiên bản | v1.1.0 |
| Ngày cập nhật | 06/11/2026 |
| Loại sản phẩm | Website portfolio tĩnh |
| Công nghệ chính | HTML5, CSS3, JavaScript |
| Môi trường | Windows 11 |
| Trình duyệt | Chrome, Edge |

## 2. Mục tiêu kiểm thử

Kiểm tra website hoạt động đúng, responsive, theme, navigation, Contact Form, validation, source path và cấu hình triển khai.

## 3. Ma trận kiểm thử

| ID | Hạng mục | Kết quả |
|---|---|---|
| TC-01 | Tải trang chủ | PASS |
| TC-02 | Navigation desktop | PASS |
| TC-03 | Navigation mobile | PASS |
| TC-04 | Light/Dark Theme | PASS |
| TC-05 | Lưu theme | PASS |
| TC-06 | Home/About/Skills/Projects/Contact | PASS |
| TC-07 | Contact Form layout | PASS |
| TC-08 | Required fields validation | PASS |
| TC-09 | Email validation | PASS |
| TC-10 | Message character counter | PASS |
| TC-11 | Error message per field | PASS |
| TC-12 | Mailto generation | PASS |
| TC-13 | Mobile Contact Form | PASS |
| TC-14 | Tablet layout | PASS |
| TC-15 | Desktop layout | PASS |
| TC-16 | Chrome | PASS |
| TC-17 | Edge | PASS |
| TC-18 | Asset paths | PASS |
| TC-19 | Docker configuration | PASS |
| TC-20 | GitHub Pages workflow | PASS |

## 4. Kiểm thử chức năng

### 4.1 Navigation

**Expected:** Chọn menu sẽ đưa người dùng tới đúng section.

**Result:** PASS.

### 4.2 Light/Dark Theme

**Expected:** Nút theme chuyển đổi giữa Light và Dark.

**Result:** PASS.

### 4.3 Responsive Navigation

**Expected:** Navigation phù hợp với viewport nhỏ và không gây tràn ngang.

**Result:** PASS.

### 4.4 Contact Form

Form gồm:
- Họ và tên.
- Email.
- Chủ đề.
- Nội dung.

**Expected:** Các trường bắt buộc phải được nhập trước khi xử lý.

**Result:** PASS.

### 4.5 Validation

Kiểm tra:
- Tên hợp lệ.
- Email đúng định dạng.
- Chủ đề không để trống.
- Nội dung có độ dài tối thiểu.

**Result:** PASS.

### 4.6 Character Counter

**Expected:** Bộ đếm thay đổi theo nội dung textarea và tuân thủ giới hạn maxlength.

**Result:** PASS.

### 4.7 Mailto

**Expected:** Form hợp lệ sẽ tạo email gồm người nhận, chủ đề và nội dung.

**Result:** PASS.

**Limitation:** Gửi email thực tế phụ thuộc email client được cấu hình trên thiết bị.

## 5. Kiểm thử giao diện

| Viewport | Nội dung | Kết quả |
|---|---|---|
| Desktop | Hero, cards, navigation, form | PASS |
| Tablet | Grid, spacing, typography, form | PASS |
| Mobile | Menu, text, cards, form | PASS |

Contact Form đã kiểm tra:
- Input focus.
- Input hover.
- Error state.
- Button hover.
- Button active.
- Character counter.
- Responsive form grid.
- Dark/Light Theme.

**Result:** PASS.

## 6. Kiểm thử mã nguồn

Kiểm tra:
- HTML tách khỏi CSS.
- CSS nằm trong assets/css/style.css.
- JavaScript nằm trong js/app.js.
- Hình ảnh nằm trong assets/images/.
- Không hard-code password/API key/credential.
- Có .gitignore.
- Có README, AI log, test report và release notes.

**Result:** PASS.

## 7. Kiểm thử triển khai

### GitHub Pages

Workflow:
`.github/workflows/deploy-pages.yml`

Mục tiêu: triển khai website sau khi source được cập nhật.

### Docker

Build:
```bash
docker build -t my-cv .
```

Run:
```bash
docker run --rm -p 8080:80 my-cv
```

Docker Compose:
```bash
docker compose up -d --build
```

Dừng:
```bash
docker compose down
```

## 8. Bảo mật và quyền riêng tư

Website là frontend/static site nên không có tài khoản hoặc database.

Đã kiểm tra:
- Không hard-code password.
- Không hard-code API key.
- Không đưa credential vào repository.
- Contact Form không lưu dữ liệu vào database.
- Input có maxlength.
- Validation được thực hiện trước khi tạo email.

> Client-side validation không thay thế server-side validation trong một hệ thống backend thực tế.

## 9. Các vấn đề có thể cải thiện

| Vấn đề | Mức độ | Hướng xử lý |
|---|---|---|
| Tối ưu kích thước ảnh | Low | WebP/AVIF và responsive images |
| Accessibility audit | Low | Automated accessibility testing |
| HTML validation | Low | Validator trong CI |
| Lighthouse benchmark | Low | Theo dõi Performance/Accessibility/SEO |
| Contact backend | Future | Tích hợp API/form service nếu cần |
| CSS module hóa | Future | Tách token/component khi project lớn hơn |

## 10. Kết luận

**PASS — phiên bản v1.1.0 đáp ứng mục tiêu của một portfolio cá nhân sinh viên CNTT.**

Website hiện có:
- Responsive UI.
- Light/Dark Theme.
- Navigation.
- Home/About/Skills/Projects/Contact.
- Contact Form và validation.
- UI/UX animation.
- Source structure rõ ràng.
- Documentation.
- AI Change Log.
- Test Report.
- Docker configuration.
- GitHub Pages workflow.

> Lưu ý: website là frontend/static. Contact Form hiện tạo email bằng mailto thay vì gửi qua backend.
