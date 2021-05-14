import "./Account.css";
import { useEffect, useState } from "react";
import { API } from "../../utils/API";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const Account = (props) => {
  // States
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const id = props.match.params.id;
      const user = await API.getUser(id);
      setName(user.data.displayName);
      setImage(user.data.image);
      setUserID(id);
    };
    return getUser();
  });

  return (
    <div className="account-container">
      <h1>Welcome!</h1>
      <div className="image-container">
        <div className="name-icon">
          <img src={image} alt="profile pic" />
          <p>{name}</p>
        </div>
      </div>
      <div className="acc-options-container">
        <h2>Account</h2>
        <div className="acc-options">View Profiles</div>
        <div className="acc-options">Create new profile</div>
        <div className="acc-options">
          <ExitToAppIcon />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Account;
