import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AddImageDialog({ onUrlCapture, dialogOpen }) {
  const [open, setOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  React.useEffect(() => {
    setOpen(dialogOpen); 
    setImageUrl("");
  }, [dialogOpen]);
  // console.log({ onUrlCapture, open });
  const handleCancel = () => {
    setOpen(false);
    onUrlCapture("");
  };
  const handleAdd = () => {
    setOpen(false);
    onUrlCapture(imageUrl);
  }

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Additional Images</DialogTitle>
      <DialogContent>
        <DialogContentText>Add an image link for the page</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Image URL"
          type="text"
          fullWidth
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
