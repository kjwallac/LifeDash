import { IconButton } from "@material-ui/core";
import { Backspace } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faEdit } from "@fortawesome/free-solid-svg-icons";

export function Edit() {
  return (
    <div style={style}>
      <IconButton aria-label="qrcode" color="primary" edge="end">
        <FontAwesomeIcon icon={faQrcode} />
      </IconButton>
      <IconButton aria-label="edit" color="primary" edge="end">
        <FontAwesomeIcon icon={faEdit} />
      </IconButton>
      <IconButton color="secondary" aria-label="delete" edge="end">
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
