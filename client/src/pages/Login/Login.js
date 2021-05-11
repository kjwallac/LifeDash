import "./Login.css";
import axios from "axios";
import { useEffect } from "react";

// const login = async () => {
//   await axios.get("/api/google");
//   console.log("LOGGED IN");
// };

const logout = async () => {
  await axios.get("/api/google/logout");
  console.log("LOGGED OUT!");
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
    <div className="container" style={container}>
      <div className="card-container" style={cardContainer}>
        <div className="card" style={card}>
          <div className="card-header" style={cardHeader}>
            Login
          </div>
          <div className="card-body" style={cardBody}>
            <a href="/api/google" style={btn}>
              Log in with Google
            </a>
          </div>
          <div className="card-footer" style={cardFooter}>
            copyright &copy; Life-Dash Company&#174;
          </div>
        </div>
      </div>
      <button style={logoutBtn} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

const {
  container,
  cardContainer,
  card,
  cardHeader,
  cardBody,
  cardFooter,
  btn,
  logoutBtn,
} = {
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "960px",
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  cardContainer: {
    width: "100%",
    padding: "1rem",
  },
  card: {
    margin: "0 auto",
    border: "1px solid gray",
    maxWidth: "100%",
  },
  cardHeader: {
    textAlign: "center",
    width: "100%",
    backgroundColor: "dodgerblue",
    fontSize: "1.5rem",
    padding: "1rem",
  },
  cardBody: {
    textAlign: "center",
    padding: "0.5rem",
  },
  cardFooter: {
    textAlign: "center",
    padding: "0.5rem",
  },
  btn: {
    backgroundColor: "#de5246",
    color: "white",
    textDecoration: "none",
    padding: "0.3rem",
    fontWeight: "bold",
  },
  logoutBtn: {
    margin: "0 auto",
    textAlign: "center",
    width: "100%",
    backgroundColor: "dodgerblue",
    color: "white",
    textDecoration: "none",
    padding: "0.3rem",
    fontWeight: "bold",
  },
};

export default Login;
