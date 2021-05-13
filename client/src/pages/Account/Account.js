import "./Account.css";
import { useEffect, useState } from "react";
import { API } from "../../utils/API";

export const Account = (props) => {
  // States
  const [name, setName] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const id = props.match.params.id;
      const user = await API.getUser(id);
      setName(user.data.displayName);
    };
    return getUser();
  });

  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
};

export default Account;
