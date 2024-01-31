import React from "react";
import User from "./UserImage";
import styles from "../components/Feed.module.css";
import "../App.css";

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
            <a
              title="Media"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              imagesmode
            </a>
            <a
              title="Gif"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              gif_box
            </a>
            <a
              title="Poll"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              ballot
            </a>
            <a
              title="Emoji"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              sentiment_satisfied
            </a>
            <a
              title="Schedule"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              calendar_clock
            </a>
            <a
              title="Tag Location"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              location_on
            </a>
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
