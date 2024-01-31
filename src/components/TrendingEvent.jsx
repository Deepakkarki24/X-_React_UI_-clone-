import React from "react";
import styles from "../components/TrendingEvent.module.css";

function TrendingEvent({
  trendingTop,
  trendingMiddle,
  trendingBottom,
  trendingBottomBlue,
}) {
  return (
    <div className={styles.trending_event}>
      <div className="trending_context">
        <h4 className={styles.fadeTitle}>{trendingTop}</h4>
        <h5 className={styles.boldTitle}>{trendingTop}</h5>
        <h4 className={styles.fadeTitle}>
          {trendingBottom}
          <span className="text-primary fw-normal">{trendingBottomBlue}</span>
        </h4>
      </div>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        more_horiz
      </span>{" "}
    </div>
  );
}

export default TrendingEvent;
