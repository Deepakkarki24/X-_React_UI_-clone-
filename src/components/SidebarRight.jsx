import React from "react";
import styles from "../components/SidebarRight.module.css";

function SidebarRight() {
  return (
    <div className={styles.sidebarRight}>
      <div className={styles.search_box}>
        <span className={`material-symbols-outlined ${styles.search_icon}`}>
          search
        </span>
        <input type="search" placeholder="Search" className={styles.search} />
      </div>
      <div className={styles.subscribe}>
        <h3 className={styles.subscribeTitle}>Subscribe to Premium</h3>
        <p className={styles.desc}>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button type="button" className="theme_button">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default SidebarRight;
