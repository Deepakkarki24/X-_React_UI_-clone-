import Avatar from "@mui/material/Avatar";
import React from "react";
import styles from "../components/Post.module.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

function Post() {
  return (
    <div className={styles.post_wrapper}>
      <div className={styles.post_box}>
        <div className={styles.post_header}>
          <div className={styles.user_det}>
            <div className="avatar">
              <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className={styles.display_name}>
              <h3>Deepak Karki</h3>
            </div>
            <div className="verified_icon">
              <VerifiedOutlinedIcon className={styles.verified_ico} />
            </div>
            <div className={styles.user_name}>
              <h4>deepak_here24</h4>
            </div>
          </div>
          <MoreHoriz className={styles.more_icon} />
        </div>
        <div className={styles.post_content}>
          <div className={styles.caption}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={styles.post}>
            <img src="https://i.gifer.com/7rF1.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
