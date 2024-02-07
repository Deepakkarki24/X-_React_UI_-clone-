import React from "react";
import styles from "../components/SidebarRight.module.css";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

function TrendingEvent({ trendingTop, trendingBottom, trendingBottomBlue }) {
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
      <MoreHoriz className={styles.icon} />
    </div>
  );
}

export default TrendingEvent;
