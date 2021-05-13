import React from "react";
import QRCode from "qrcode.react";
import logo from "../images/logo.png";

const Data = () => {
  const profileId = "6096d4f37db3bb974d03154e";
  return (
    <div>
      <h1>QR Code</h1>
      <br />
      <QRCode
        value={`http://localhost:3000/profile/${profileId}`}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        renderAs={"canvas"}
        imageSettings={{
          src: logo,
          x: null,
          y: null,
          height: 24,
          width: 24,
          excavate: true,
        }}
      />
    </div>
  );
};

export default Data;
