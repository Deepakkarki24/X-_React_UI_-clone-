import React, { useState } from "react";
import User from "./UserImage";
import styles from "../components/Feed.module.css";

import MmsIcon from "@mui/icons-material/Mms";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox({ showHidePostSec }) {
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
            <input
              type="text"
              id="file"
              value={tweetImage}
              placeholder="Enter your URL (image, gif, video"
              onChange={handleImageChange}
            />
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

      {/* mobile post sec */}
      {showHidePostSec ? (
        <div className={`${styles.post_section_mob} ${styles.mob_hide}`}>
          <form action="#">
            <div className={styles.user_input}>
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
              <input
                type="text"
                id="file"
                value={tweetImage}
                placeholder="Enter your URL (image, gif, video"
                onChange={handleImageChange}
              />

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
      ) : null}
    </>
  );
}

export default TweetBox;
