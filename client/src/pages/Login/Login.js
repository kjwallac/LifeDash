import "./Login.css";
import axios from "axios";
import { useEffect } from "react";

const logout = async () => {
  await axios.get("/api/google/logout");
  window.location.href = "/";
};

export const Login = () => {
  // Gets data to display
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/user");
      console.log(res.data);
    };
    return getData();
  }, []);

  return (
    <div className="container">
      <div className="cardContainer">
        <div className="card">
          <div className="cardHeader">Login</div>
          <div className="cardBody">
            <a href="http://localhost:5000/api/google" className="btn">
              Log in with Google
            </a>
          </div>
          <div className="cardFooter">
            copyright &copy; Life-Dash Company&#174;
          </div>
        </div>
      </div>
      <button className="logoutBtn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Login;
