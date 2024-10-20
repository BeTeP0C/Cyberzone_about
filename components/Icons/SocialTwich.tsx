import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function SocialTwich ({width = 62, height = 65}: IconProps) {
  return (
    <span className={styles.social}>
      <svg width={width} height={height} viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.28125 0.0625L0.0625 11.3125V56.3125H15.5312V64.75H23.9688L32.4062 56.3125H45.0625L61.9375 39.4375V0.0625H4.28125ZM11.3125 5.6875H56.3125V36.625L47.875 45.0625H31L22.5625 53.5V45.0625H11.3125V5.6875ZM25.375 16.9375V33.8125H31V16.9375H25.375ZM39.4375 16.9375V33.8125H45.0625V16.9375H39.4375Z" fill="#FF9900"/>
      </svg>
    </span>
  )
}
