import { IconButton } from "@material-ui/core";
import { Backspace } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faEdit } from "@fortawesome/free-solid-svg-icons";
import { API } from "../utils/API";
import { useState } from "react";

export function Edit({ id, loadScreen }) {
  const [loading, setLoading] = useState(loadScreen);

  const qrBtn = () => {
    console.log("Clicked qr");
    console.log(id);
    setLoading(true);
  };

  const editBtn = () => {
    console.log("Clicked edit");
    console.log(id);
  };

  const removeBtn = async () => {
    const res = await API.removeProfile(id);
    if (res.statusText === "OK") {
      window.location.reload();
    }
  };

  return (
    <div style={style}>
      <IconButton
        aria-label="qrcode"
        color="primary"
        edge="end"
        onClick={qrBtn}
      >
        <FontAwesomeIcon icon={faQrcode} />
      </IconButton>
      <IconButton
        aria-label="edit"
        color="primary"
        edge="end"
        onClick={editBtn}
      >
        <FontAwesomeIcon icon={faEdit} />
      </IconButton>
      <IconButton
        color="secondary"
        aria-label="delete"
        edge="end"
        onClick={removeBtn}
      >
        <Backspace />
      </IconButton>
    </div>
  );
}

const style = {
  whiteSpace: "no-wrap",
  display: "flex",
  flexWrap: "nowrap",
};

export default Edit;
