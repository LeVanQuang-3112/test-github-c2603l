Context API thường có 3 phần:
1. Tạo context
2. Bọc component bằng Provider
3. Lấy dữ liệu bằng useContext




Redux Toolkit
- Store: {user: {...}, product: {...}, ...} // Lưu trữ toàn bộ dữ liệu
- Slide: User Slide, Cart Slide, Order Slide, ...
- Dispatch: Nghĩ là gửi yêu cầu. Ví dụ dispatch(addProduct())
- Selector: lấy dữ liệu từ Store


store: redux, redux toolkit, zustand
React query
react hook form
zod/yum



Click bản ghi A => Call API A
Click bản ghi B => Call API B
Click bản ghi C => Call API C

C - B - A: kết quả là A hiển thị ra

Click A: cho call
Click B: huỷ A, call B
Click C: huỷ B, call C

=> AbortController


FPS: Frame per second: Số khung hình trên giây - càng lớn càng tốt

Bài toán: render hiển thị một lúc 1000 sản phẩm

useMemo, useCallback, React.memo


Vite