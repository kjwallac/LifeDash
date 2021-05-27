import { Button } from "@material-ui/core";
import { ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../utils/API";

export const BackButton = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  const fetchUser = async () => {
    const res = await API.getAllUsers();
    if (!res.data.passport) {
      return;
    } else {
      setUser(res.data.passport.user);
    }
  };

  const goBack = () => {
    if (!user) {
      history.push("/");
    } else {
      const pathing = history.location.pathname;
      if (pathing.includes(`/profiles/`)) {
        history.push(`/account/${user}`);
      } else if (pathing.includes(`/profile/edit`)) {
        history.push(`/profiles/view/${user}`);
      } else if (pathing.includes(`/profile/create`)) {
        history.push(`/account/${user}`);
      } else if (pathing.includes(`/profile`)) {
        history.push(`/profiles/view/${user}`);
      } else {
        history.push("/home");
      }
    }
  };

  return (
    <div>
      <Button
        style={{ color: "white" }}
        onClick={goBack}
        color="primary"
        startIcon={<ArrowBackIosIcon />}
      />
    </div>
  );
};
