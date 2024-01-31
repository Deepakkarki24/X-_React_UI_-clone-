import React from "react";
import styles from "../components/SidebarRight.module.css";
import TrendingEvent from "./TrendingEvent";

function SidebarRight({ subsTitle, subsContent, HandleContext }) {
  return (
    <div className={`${styles.sidebarRight} sticky-top`}>
      {/* search box area */}
      <div className={styles.search_box}>
        <span className={`material-symbols-outlined ${styles.search_icon}`}>
          search
        </span>
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
        <h3 className={styles.title}>What’s happening</h3>

        <div className={styles.trending_events_box}>
          {/* Trending Event component */}
          <TrendingEvent
            trendingTop={"trending in India"}
            trendingMiddle={"#DelhiNCR"}
            trendingBottom={"Trending with "}
            trendingBottomBlue={"#Delhirain"}
          />
          <TrendingEvent
            trendingTop={"Trending"}
            trendingMiddle={"#Paytm"}
            trendingBottom={"Trending with "}
            trendingBottomBlue={"Fastag"}
          />
          <TrendingEvent
            trendingTop={"News Trending"}
            trendingMiddle={"#Breaking News"}
            trendingBottom={"35k posts"}
            trendingBottomBlue={""}
          />{" "}
          <TrendingEvent
            trendingTop={"Business & Finance"}
            trendingMiddle={"#Suzlon"}
            trendingBottom={""}
            trendingBottomBlue={""}
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
