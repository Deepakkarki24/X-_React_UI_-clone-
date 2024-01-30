import React from "react";
import styles from "../components/Sidebar.module.css";

function User() {
  return (
    <div className={styles.user_img}>
      <img
        className={styles.img}
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User Image"
      />
    </div>
  );
}

export default User;
