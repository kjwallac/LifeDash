import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { Backspace } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faEdit } from "@fortawesome/free-solid-svg-icons";
import { API } from "../utils/API";
import QRDialog from "./QRDialog";

export function Edit({ id, name }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const qrBtn = () => {
    setDialogOpen(true);
  };

  const editBtn = () => {
    window.location.href = `/profile/edit/${id}`;
  };

  const removeBtn = async () => {
    const res = await API.removeProfile(id);
    if (res.statusText === "OK") {
      window.location.reload();
    }
  };

  return (
    <div style={style}>
      <QRDialog
        profileId={id}
        name={name}
        dialogOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
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
  flexBasis: "20%",
  justifyContent: "flex-end",
};

export default Edit;
