import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function FooterTwich ({width = 11, height = 13}: IconProps) {
  return (
    <span className={styles.footerApp}>
      <svg width={width} height={height} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.275 2.70625H6.16875V5.38125H5.275M7.73125 2.70625H8.625V5.38125H7.73125M2.375 0.25L0.143753 2.48125V10.5188H2.81875V12.75L5.05625 10.5188H6.8375L10.8563 6.5V0.25M9.9625 6.05625L8.18125 7.8375H6.39375L4.83125 9.4V7.8375H2.81875V1.14375H9.9625V6.05625Z" fill="#181818"/>
      </svg>
    </span>
  )
}
