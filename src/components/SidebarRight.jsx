import React from "react";
import styles from "../components/SidebarRight.module.css";
import TrendingEvent from "./TrendingEvent";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
} from "react-twitter-embed";

import SearcIcon from "@mui/icons-material/Search";

function SidebarRight({ subsTitle, subsContent }) {
  return (
    <div className={styles.sidebarRight}>
      {/* search box area */}
      <div className={styles.search_box}>
        <SearcIcon className={styles.search_icon} />
        <input type="search" placeholder="Search" className={styles.search} />
      </div>
      {/* search box area */}

      {/* subscribe area */}
      <div className={`${styles.subscribe} ${styles.box_style}`}>
        <h3 className={styles.title}>{subsTitle}</h3>
        <p className={styles.desc}>{subsContent}</p>
        <button type="button" className="theme_button">
          Subscribe
        </button>
      </div>
      {/* subscribe area */}

      {/* happening area */}
      <div className={`${styles.box_style} ${styles.happening}`}>
        <h3 className={styles.title}>Post & Events</h3>

        <div className={styles.trending_events_box}>
          <div className={styles.timelineEmbed}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="deepak_here24"
              options={{ height: 400 }}
              theme="dark"
            />
          </div>
          <div className={styles.follow_embed}>
            <TwitterFollowButton screenName={"deepak_here24"} />
          </div>
          <div className={styles.hastagEmbed}>
            <TwitterHashtagButton tag={"react"} />
            <TwitterHashtagButton tag={"twitter"} />
            <TwitterHashtagButton tag={"clone"} />
          </div>
          <div className={styles.shareEmbed}>
            <TwitterShareButton
              className={styles.tweetButton}
              url={""}
              options={{ text: "#reactjs is awesome", via: "deepak_here24" }}
            />
          </div>

          {/* <TwitterHashtagButton tag={"cybersecurity"} /> */}
          {/* Trending Event component */}
          <TrendingEvent
            trendingTop={"Trending in India"}
            trendingMiddle={"#ReactJs"}
            trendingBottom={"Trending with "}
            trendingBottomBlue={"#ReactJs"}
          />
          {/* Trending Event component */}
        </div>
        <a href="#">Show more</a>
      </div>
      {/* happening area */}
    </div>
  );
}

export default SidebarRight;
