import React, { Component } from "react";
import QRCode from "qrcode.react";
const Data = () => {
  const profile = "profile";
  return (
    <div>
      <h1>QR Code</h1>
      <br />
      <QRCode
        value={`http://localhost:3000/${profile}`}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        renderAs={"canvas"}
        imageSettings={{
          src: "https://as2.ftcdn.net/v2/jpg/01/02/91/81/1000_F_102918174_QGmLMKptlHBPNNuwtQv7Un5wJVupXfmn.jpg",
          x: null,
          y: null,
          height: 45,
          width: 45,
          excavate: true,
        }}
      />
    </div>
  );
};

export default Data;
