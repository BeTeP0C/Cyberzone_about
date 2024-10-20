import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function OurContactsDot ({width = 17, height = 22}: IconProps) {
  return (
    <span className={styles.ourcontacts }>
      <svg width={width} height={height} viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33331 21.7201C8.33331 21.7201 16.3333 14.2203 16.3333 8.53017C16.3333 6.43126 15.4905 4.41831 13.9902 2.93415C12.4899 1.45 10.455 0.616211 8.33331 0.616211C6.21158 0.616211 4.17675 1.45 2.67646 2.93415C1.17617 4.41831 0.333313 6.43126 0.333313 8.53017C0.333313 14.2203 8.33331 21.7201 8.33331 21.7201ZM8.33331 12.4871C7.27245 12.4871 6.25503 12.0703 5.50489 11.3282C4.75474 10.5861 4.33331 9.57962 4.33331 8.53017C4.33331 7.48071 4.75474 6.47424 5.50489 5.73216C6.25503 4.99008 7.27245 4.57319 8.33331 4.57319C9.39418 4.57319 10.4116 4.99008 11.1617 5.73216C11.9119 6.47424 12.3333 7.48071 12.3333 8.53017C12.3333 9.57962 11.9119 10.5861 11.1617 11.3282C10.4116 12.0703 9.39418 12.4871 8.33331 12.4871Z" fill="#181818"/>
      </svg>

    </span>
  )
}
