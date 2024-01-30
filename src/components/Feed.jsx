import React from "react";
import User from "./User";
import styles from "../components/Feed.module.css";

function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.top_navigation}>
        <a href="#" className={styles.navigation}>
          <span className={styles.name_span}>For you</span>
        </a>
        <a href="#" className={styles.navigation}>
          <span className={styles.name_span}>Following</span>
        </a>
        <div className={styles.setting_box}>
          <a className={styles.a} href="#">
            <span
              className={`material-symbols-outlined ${styles.setting_icon}`}
            >
              settings
            </span>
          </a>
        </div>
      </div>
      <div className={styles.post_section}>
        <div className={styles.user_input}>
          <User />
          <input
            className={styles.form_control}
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        <div className={styles.user_actions}>
          <div className={styles.icon_box}>
            <span className={`material-symbols-outlined ${styles.action_icon}`}>
              imagesmode
            </span>
            <span className={`material-symbols-outlined ${styles.action_icon}`}>
              gif_box
            </span>
            <span className={`material-symbols-outlined ${styles.action_icon}`}>
              ballot
            </span>
            <span className={`material-symbols-outlined ${styles.action_icon}`}>
              sentiment_satisfied
            </span>
            <span className={`material-symbols-outlined ${styles.action_icon}`}>
              calendar_clock
            </span>
            <span className={`material-symbols-outlined ${styles.action_icon}`}>
              location_on
            </span>
          </div>

          <button type="button" className="btn btn-xs" disabled>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
