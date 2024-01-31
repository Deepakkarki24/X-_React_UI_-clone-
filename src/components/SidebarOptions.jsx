import React from "react";
import styles from "../components/SidebarOptions.module.css";

function SidebarOptions({ optionName, optionIconName, isActiveClass }) {
  return (
    <div className={styles.side_nav_item_box}>
      <div className={styles.side_nav_links}>
        <a href="#" className={styles.side_nav_link}>
          <div className={`${styles.inner_li} ${isActiveClass}`}>
            <span className={`material-symbols-outlined ${styles.list_icon}`}>
              {optionIconName}
            </span>{" "}
            <span className={styles.list_name}>{optionName}</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SidebarOptions;
