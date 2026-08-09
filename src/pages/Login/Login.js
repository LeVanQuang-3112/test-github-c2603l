// Các hook đã được học: useState, useEffect, useNavigate, useContext, useParams
// Trong trường hợp muốn lưu một giá trị: useState (re-render component khi mà giá trị thay đổi)

// Đề bài: có một form login, có email, password. Khi click submit thì sẽ validate thông tin và xử lý theo kết qủa validate
// (nếu không hợp lệ thì báo lỗi, hợp lệ thì cho vào màn Home)

// Xử lý bằng useRef
// Nếu giao diện không phụ thuộc vào giá trị đang nhập thì nên dùng useRef

// React.memo
// useMemo, useCallback
// Tanstack: react query

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// component Login (thành phần trong ReactJS)
function Login() {
  // Phần viết logic (viết xử lý form, xử lý dữ liệu, call API, ...)
  console.log("first");
  // Bước 1: Tạo state
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  // emailRef = {current: null}
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  console.log(emailRef, "email ref");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(emailRef.current.value, "email");
    console.log(passwordRef.current.value, "password");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // ==: Kiểm tra bằng nhau (cùng giá trị)
    // ===: Kiểm tra bằng nhau (cùng giá trị, cùng kiểu dữ liệu)

    if (email === "example@gmail.com" && password === "password@123") {
      navigate("/home");
    } else {
      alert("Sai thông tin đăng nhập");
    }
  };

  // Return JSX - javascript and xml (HTML + JS)
  return (
    <div>
      <h1>Trang đăng nhập</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Nhập email"
          type="email"
          ref={emailRef}
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Nhập mật khẩu"
          type="password"
          ref={passwordRef}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
