import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import QRCode from "qrcode.react";

export default function QRDialog({ profileId, name, dialogOpen, onClose }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(dialogOpen);
  }, [dialogOpen]);

  const handleClose = () => {
    onClose();
    setOpen(false);

  };

  const segments = window.location.href.split('/');
  segments.pop();
  segments.pop();
  segments.push(profileId);
  const qrCodeValue = segments.join('/');

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle style={{textAlign:"center"}} id="form-dialog-title">{name}</DialogTitle>
      <DialogContent style={{textAlign:"center"}} >
      <DialogContentText style={{textAlign:"center"}}>Scan to view profile</DialogContentText>

        <QRCode
          value={qrCodeValue}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          renderAs={"svg"}
          imageSettings={{
            src: "/images/logo.png",
            x: null,
            y: null,
            height: 24,
            width: 24,
            excavate: true,
          }}
        ></QRCode>
      </DialogContent>
    </Dialog>
  );
}
