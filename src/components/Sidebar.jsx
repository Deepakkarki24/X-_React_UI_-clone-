import React, { useState } from "react";
import styles from "../components/Sidebar.module.css";
import User from "./User";

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
        <div className={styles.side_nav_item_box}>
          <ul className={styles.side_nav_links}>
            <a href="#" className={styles.side_nav_link}>
              <div className={`${styles.inner_li} ${styles.isactive}`}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  home
                </span>{" "}
                <span className={styles.list_name}>Home</span>
              </div>
            </a>
            <a href="#" className={styles.side_nav_link}>
              <div className={styles.inner_li}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  search
                </span>{" "}
                <span className={styles.list_name}>Explore</span>
              </div>
            </a>
            <a href="#" className={styles.side_nav_link}>
              <div className={styles.inner_li}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  notifications
                </span>{" "}
                <span className={styles.list_name}>Notification</span>
              </div>
            </a>
            <a href="#" className={styles.side_nav_link}>
              <div className={styles.inner_li}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  mail
                </span>{" "}
                <span className={styles.list_name}>Messages</span>
              </div>
            </a>
            <a href="#" className={styles.side_nav_link}>
              <div className={styles.inner_li}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  <span
                    className={`material-symbols-outlined ${styles.list_icon}`}
                  >
                    featured_play_list
                  </span>
                </span>{" "}
                <span className={styles.list_name}>Grok</span>
              </div>
            </a>
            <a href="#" className={styles.side_nav_link}>
              <div className={styles.inner_li}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  box
                </span>{" "}
                <span className={styles.list_name}>Lists</span>
              </div>
            </a>
            <a href="#" className={styles.side_nav_link}>
              <div className={styles.inner_li}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  person
                </span>{" "}
                <span className={styles.list_name}>Profile</span>
              </div>
            </a>
            <a href="#" className={styles.side_nav_link}>
              <div className={styles.inner_li}>
                <span
                  className={`material-symbols-outlined ${styles.list_icon}`}
                >
                  more_horiz
                </span>{" "}
                <span className={styles.list_name}>More</span>
              </div>
            </a>
          </ul>
          <button className={`${styles.btn} ${styles.btn_primary_blue}`}>
            Post
          </button>
        </div>
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
