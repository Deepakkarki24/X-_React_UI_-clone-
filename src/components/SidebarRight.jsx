import React from "react";
import styles from "../components/SidebarRight.module.css";
import TrendingEvent from "./TrendingEvent";

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
        <h3 className={styles.title}>#astags for You !</h3>

        <div className={styles.trending_events_box}>
          {/* Trending Event component */}
          <TrendingEvent
            trendingTop={"Trending in India"}
            trendingMiddle={"#React🔥"}
            trendingBottom={"Trending with "}
            trendingBottomBlue={"#ReactJS"}
          />
          <TrendingEvent
            trendingTop={"Checkout my LinkedIn"}
            trendingMiddle={"#ConnectWithMe"}
            trendingBottom={"Deepak Karki 👈🏻 on "}
            trendingBottomBlue={"#LinkedIn"}
          />
          <TrendingEvent
            trendingTop={"Give Your Feedback as post"}
            trendingMiddle={"Feed back with image or gif 🤍"}
            trendingBottom={"Post your Feedback"}
            trendingBottomBlue={"#showlove"}
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
