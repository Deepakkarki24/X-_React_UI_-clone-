import React, { useState } from "react";
import User from "./UserImage";
import styles from "../components/Feed.module.css";

import MmsIcon from "@mui/icons-material/Mms";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const handleOnChange = (e) => {
    setTweetMsg(e.target.value);
  };

  const handleImageChange = (e) => {
    setTweetImage(e.target.value);
  };

  const sendTweet = async (e) => {
    e.preventDefault();

    const addCollectionRef = collection(db, "posts");

    try {
      await addDoc(addCollectionRef, {
        avatar: "/src/assets/images/profile.jpg",
        displayName: "Deepak Karki",
        userName: "deepak_here24",
        verified: true, // Assuming verified is a boolean, adjust accordingly
        text: tweetMsg,
        image: tweetImage,
      });

      setTweetImage("");
      setTweetMsg("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <div className={styles.post_section}>
        <form action="#">
          <div className={styles.user_input}>
            <div className={styles.back_icon_box}>
              <KeyboardBackspaceOutlinedIcon className={styles.backIcon} />
            </div>
            <User />

            <input
              className={styles.form_control}
              type="text"
              placeholder="What is happening?!"
              value={tweetMsg}
              onChange={handleOnChange}
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
                  value={tweetImage}
                  onChange={handleImageChange}
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

            <button
              onClick={sendTweet}
              type="submit"
              className="btn btn-xs theme_button"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TweetBox;
