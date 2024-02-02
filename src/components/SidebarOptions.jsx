import React from "react";
import styles from "../components/SidebarOptions.module.css";

function SidebarOptions({ optionName, Icon, isActiveClass }) {
  return (
    <div className={styles.side_nav_item_box}>
      <div className={styles.side_nav_links}>
        <a href="#" className={styles.side_nav_link}>
          <div className={`${styles.inner_li} ${isActiveClass}`}>
            <Icon className={styles.list_icon} />
            <span className={styles.list_name}>{optionName}</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SidebarOptions;
