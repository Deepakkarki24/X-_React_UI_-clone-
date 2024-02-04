import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearcIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";

import styles from "./MobileNav.module.css";

function MobileNav() {
  return (
    <div className={styles.mobile_footer}>
      <HomeIcon className={styles.icon} />
      <SearcIcon className={styles.icon} />
      <AddIcon className={styles.icon} />
      <NotificationsNoneIcon className={styles.icon} />
      <MailOutlineIcon className={styles.icon} />
    </div>
  );
}

export default MobileNav;
