import React from "react";
import styles from "../components/UserImage.module.css";
import Avatar from "@mui/material/Avatar";

function User() {
  return (
    <div className={styles.user_img}>
      <Avatar src="./src/assets/images/profile.jpg" />
    </div>
  );
}

export default User;
