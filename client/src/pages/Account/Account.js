import "./Account.css";
import { useEffect, useState, Fragment } from "react";
import { API } from "../../utils/API";
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";

export const Account = (props) => {
  // States
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [userID, setUserID] = useState(null);
  const [loading, setLoading] = useState(true);

  // Logout user
  const logout = async () => {
    await API.logout();
    window.location.href = "/";
  };

  if (false) {
    console.log(userID);
  }

  // Gets user info
  useEffect(() => {
    const getUser = async () => {
      const id = props.match.params.id;
      const user = await API.getUser(id);
      setName(user.data.displayName);
      setImage(user.data.image);
      setUserID(id);
      setLoading(false);
    };
    return getUser();
  });

  return (
    <div className="account-container">
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <h1>Welcome!</h1>
          <div className="image-container">
            <div className="name-icon">
              <img src={image} alt="profile pic" />
              <p>{name}</p>
            </div>
          </div>
          <div className="acc-options-container">
            <h2>Account</h2>
            <Link to="/profile" className="acc-options">
              View Profiles
            </Link>
            <Link to="/profile/create" className="acc-options">
              Create New Profile
            </Link>
            <button onClick={logout}>
              <ExitToAppIcon /> Logout
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Account;
