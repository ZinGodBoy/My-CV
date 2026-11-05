# BÁO CÁO KIỂM THỬ PHẦN MỀM

## 1. Thông tin chung

| Hạng mục | Nội dung |
|---|---|
| Dự án | My-CV — Portfolio cá nhân |
| Chủ sở hữu | Tạ Đăng Khôi |
| Phiên bản | v1.0 |
| Ngày kiểm thử | 05/11/2026 |
| Loại sản phẩm | Website portfolio tĩnh |
| Công nghệ | HTML5, CSS3, JavaScript |
| Môi trường | Windows 11 |
| Trình duyệt | Chrome, Edge |
| Phạm vi | Chức năng, UI/UX, responsive, mã nguồn, triển khai |

## 2. Mục tiêu

Xác nhận website hoạt động đúng, hiển thị ổn định trên các kích thước màn hình phổ biến và repository có đủ tài liệu để người khác có thể clone, chạy, kiểm thử và tiếp tục phát triển.

## 3. Ma trận kiểm thử

| ID | Hạng mục | Kết quả | Minh chứng |
|---|---|---|---|
| TC-01 | Tải trang chủ | PASS | `index.html` |
| TC-02 | Navigation desktop | PASS | Menu điều hướng |
| TC-03 | Navigation mobile | PASS | Menu responsive |
| TC-04 | Chuyển Light/Dark | PASS | Theme toggle |
| TC-05 | Lưu theme | PASS | Local Storage |
| TC-06 | About/Skills/Projects/Contact | PASS | Các section chính |
| TC-07 | Responsive Mobile | PASS | `docs/screenshots/` |
| TC-08 | Responsive Tablet | PASS | `docs/screenshots/` |
| TC-09 | Responsive Desktop | PASS | `docs/screenshots/` |
| TC-10 | Chrome | PASS | Kiểm thử trình duyệt |
| TC-11 | Edge | PASS | Kiểm thử trình duyệt |
| TC-12 | Reload trang | PASS | Không mất giao diện |
| TC-13 | Asset path | PASS | CSS/JS/Image |
| TC-14 | Console | PASS | Không phát hiện lỗi nghiêm trọng |
| TC-15 | Clone repository | PASS | GitHub |
| TC-16 | Docker build/run | PASS | Dockerfile |
| TC-17 | GitHub Pages workflow | PASS | `.github/workflows/` |

## 4. Kiểm thử chức năng

### 4.1 Navigation

**Expected:** Khi chọn một mục menu, trình duyệt chuyển đến đúng section.

**Result:** PASS.

### 4.2 Theme

**Expected:** Nút theme chuyển đổi Light/Dark và lựa chọn được lưu sau khi reload.

**Result:** PASS.

### 4.3 Responsive menu

**Expected:** Trên màn hình nhỏ, navigation chuyển sang dạng menu phù hợp và không gây tràn ngang.

**Result:** PASS.

### 4.4 Nội dung portfolio

**Expected:** Các section Home, About, Skills, Projects và Contact hiển thị đầy đủ.

**Result:** PASS.

## 5. Kiểm thử giao diện

| Thiết bị | Nội dung | Kết quả |
|---|---|---|
| Mobile | Bố cục, menu, ảnh, text | PASS |
| Tablet | Grid, spacing, typography | PASS |
| Desktop | Hero, cards, navigation | PASS |

Các screenshot minh chứng được lưu trong `docs/screenshots/`.

## 6. Kiểm thử mã nguồn

- HTML được tách khỏi CSS và JavaScript.
- CSS nằm trong `assets/css/style.css`.
- JavaScript nằm trong `js/app.js`.
- Hình ảnh nằm trong `assets/images/`.
- Không đưa mật khẩu, API key hoặc credential vào repository.
- Có `.gitignore` cho file môi trường và file tạm.
- README mô tả cấu trúc, cách chạy và quy trình Git.
- Có AI log, release note và test report.

## 7. Kiểm thử triển khai

### GitHub Pages

Workflow:

` .github/workflows/deploy-pages.yml `

Trigger:

- Push lên `main`.
- Manual workflow dispatch.

Mục tiêu: tự động đóng gói và triển khai website sau mỗi lần cập nhật source.

### Docker

Website có thể chạy bằng Nginx:

```bash
docker build -t my-cv .
docker run --rm -p 8080:80 my-cv
```

## 8. Vấn đề còn có thể cải thiện

| Vấn đề | Mức độ | Hướng xử lý |
|---|---|---|
| Tối ưu thêm kích thước ảnh | Low | WebP/AVIF và responsive images |
| Benchmark Lighthouse chi tiết | Low | Bổ sung điểm Performance/Accessibility/SEO |
| Refactor CSS khi mở rộng | Low | Chia token/component thành module |
| Automated HTML validation | Low | Bổ sung CI validation |

Các mục trên không ngăn cản việc sử dụng phiên bản v1.0.

## 9. Kết luận

**PASS — phiên bản v1.0 đủ điều kiện bàn giao.**

Website đáp ứng mục tiêu của một portfolio cá nhân sinh viên CNTT: có giao diện responsive, tương tác JavaScript, cấu trúc source rõ ràng, tài liệu dự án, kiểm thử, Docker và quy trình triển khai GitHub Pages.

