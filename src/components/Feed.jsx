import styles from "../components/Feed.module.css";
import "../App.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

import { useState, useEffect } from "react";
import Post from "./Post";
import Avatar from "@mui/material/Avatar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import TweetBox from "./TweetBox";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "posts");

    // Using onSnapshot for real-time updates
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);
  return (
    <>
      <div className={styles.feed}>
        <div className={styles.mob_top_nav}>
          <div className={styles.flex_top}>
            <Avatar src="src/assets/images/profile.jpg" />
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
            <SettingsOutlinedIcon />
          </div>
        </div>

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
        <TweetBox />
        {posts.map((post) => (
          <Post
            key={post.id}
            avatar={post.avatar}
            displayName={post.displayName}
            verified={post.verified}
            userName={post.userName}
            text={post.text}
            image={post.image}
          />
        ))}
        <div className={styles.sticky_icon_mob}>
          <HistoryEduIcon fontSize="large" />
        </div>
      </div>
    </>
  );
}

export default Feed;
