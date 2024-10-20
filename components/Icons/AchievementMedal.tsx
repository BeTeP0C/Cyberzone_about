import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function AchievementMedal ({width = 35, height = 50}: IconProps) {
  return (
    <span className={styles.achieve}>
      <svg width={width} height={height} viewBox="0 0 35 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.268 3.29956H24.668L31.868 20.0996L17.468 24.8996M10.268 3.29956L3.06799 20.0996L17.468 24.8996M10.268 3.29956L17.468 24.8996M17.468 24.8996L13.868 32.0996L6.66799 33.2996L11.468 38.0996L10.268 46.4996L17.468 42.8996L24.668 46.4996L23.468 38.0996L28.268 33.2996L21.068 32.0996L17.468 24.8996ZM24.668 22.4996L17.468 3.29956" stroke="#181818" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>


    </span>
  )
}
