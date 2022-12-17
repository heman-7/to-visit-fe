import { color } from "@mui/system";
import React from "react";

function Footer() {
  return (
    //fix footer
    <div
      className="text-center"
      style={{
        position: "relative",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#f6f6f6f",
      }}
    >
      Copyright @ 2022
    </div>
  );
}

export default Footer;
