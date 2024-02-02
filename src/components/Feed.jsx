import React from "react";
import User from "./UserImage";
import styles from "../components/Feed.module.css";
import "../App.css";

import MmsIcon from "@mui/icons-material/Mms";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { useState } from "react";
import Post from "./Post";

function Feed() {
  const [buttonAble, SetButtonAble] = useState();

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
            <SettingsOutlinedIcon className={styles.setting_icon} />
          </a>
        </div>
      </div>
      <div className={styles.post_section}>
        <form action="#">
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
              <div className={styles.icon_input}>
                <span role="button" tabIndex={0}>
                  <MmsIcon className={styles.action_icon} />
                </span>
                <small className={styles.tooltip}>Media</small>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime"
                  tabIndex={-1}
                  multiple
                  data-testid="fileInput"
                  title="Media"
                />
              </div>
              <div className={styles.icon_input}>
                <span
                  className={`material-symbols-outlined ${styles.action_icon} `}
                >
                  <GifBoxOutlinedIcon className={styles.action_icon} />
                  <small className={styles.tooltip}>Gif</small>
                </span>
              </div>

              <div className={styles.icon_input}>
                <span>
                  <BallotOutlinedIcon className={styles.action_icon} />
                  <small className={styles.tooltip}>Poll</small>
                </span>
              </div>

              <div className={styles.icon_input}>
                <span>
                  <SentimentSatisfiedOutlinedIcon
                    className={styles.action_icon}
                  />
                  <small className={styles.tooltip}>Emoji</small>
                </span>
              </div>
              <div className={styles.icon_input}>
                <span>
                  <CalendarMonthOutlinedIcon className={styles.action_icon} />
                  <small className={styles.tooltip}>Schedule</small>
                </span>
              </div>

              <div className={styles.icon_input}>
                <span>
                  <LocationOnOutlinedIcon className={styles.action_icon} />
                  <small className={styles.tooltip}>Location</small>
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-xs theme_button">
              Post
            </button>
          </div>
        </form>
      </div>
      <Post />
    </div>
  );
}

export default Feed;
