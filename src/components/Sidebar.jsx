import React, { useState } from "react";
import styles from "../components/Sidebar.module.css";
import User from "./UserImage";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className={`${styles.sidebar} sticky-top`}>
      <div className={styles.sidebar_top}>
        <div className={styles.logo}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        {/* Sidebar Options component */}
        <SidebarOptions
          optionName={"Home"}
          optionIconName={"Home"}
          isActiveClass={styles.isactive}
        />
        <SidebarOptions
          optionName={"Explore"}
          optionIconName={"search"}
          isActiveClass={styles.isntactive}
        />
        <SidebarOptions
          optionName={"Notifications"}
          optionIconName={"notifications"}
          isActiveClass={styles.isntactive}
        />
        <SidebarOptions
          optionName={"Messages"}
          optionIconName={"mail"}
          isActiveClass={styles.isntactive}
        />
        <SidebarOptions
          optionName={"Grok"}
          optionIconName={"featured_play_list"}
          isActiveClass={styles.isntactive}
        />
        <SidebarOptions
          optionName={"Lists"}
          optionIconName={"box"}
          isActiveClass={styles.isntactive}
        />
        <SidebarOptions
          optionName={"Profile"}
          optionIconName={"Person"}
          isActiveClass={styles.isntactive}
        />
        <SidebarOptions
          optionName={"More"}
          optionIconName={"more_horiz"}
          isActiveClass={styles.isntactive}
        />
        {/* Sidebar Options component */}

        <button className={`${styles.btn} ${styles.btn_primary_blue}`}>
          Post
        </button>
      </div>

      <a href="#" className={styles.user}>
        <div className={styles.user_profilebox}>
          <User />
          <div className={styles.user_name}>
            <h3 className={styles.name}>Deepak Karki</h3>
            <h4 className={styles.user_name}>@deepak_here24</h4>
          </div>
        </div>
        <span className={`material-symbols-outlined ${styles.more_icon}`}>
          more_horiz
        </span>{" "}
      </a>
    </div>
  );
}

export default Sidebar;
