import React from "react";
import styles from "./styles.module.scss"
import { AchievementMedal } from "../../Icons/AchievementMedal";

export function Achievement () {
  return (
    <div className={styles.contain}>
      <div className={styles.info}>
        <AchievementMedal />

        <h3 className={styles.heading}>
          <span className={styles.bold}>152</span>
          Турнира за последние два года
        </h3>
      </div>
    </div>
  )
}
