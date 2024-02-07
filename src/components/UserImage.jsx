import React from "react";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import profile from "../assets/profile.jpg";

function User() {
  return (
    <div className="user_img">
      <Avatar src={profile} />
    </div>
  );
}

export default User;
