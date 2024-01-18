import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Bạn có thể giữ lại phần này để giữ nguyên giao diện người dùng
      // Điều chỉnh theo cần thiết
      navigate("/");
    } catch (err) {
      // Xử lý lỗi nếu cần
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
