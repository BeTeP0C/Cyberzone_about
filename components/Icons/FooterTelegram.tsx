import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function FooterTelegram ({width = 13, height = 12}: IconProps) {
  return (
    <span className={styles.footerApp}>
      <svg width={width} height={height} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2144 1.69689L10.366 10.4141C10.2266 11.0293 9.86289 11.1824 9.34609 10.8926L6.52968 8.8172L5.1707 10.1242C5.02031 10.2746 4.89453 10.4004 4.60468 10.4004L4.80703 7.53205L10.0269 2.81525C10.2539 2.61291 9.97773 2.5008 9.67422 2.70314L3.22109 6.76642L0.442965 5.89689C-0.161332 5.70822 -0.17227 5.29259 0.568746 5.00275L11.4352 0.816423C11.9383 0.627751 12.3785 0.928532 12.2144 1.69689Z" fill="#181818"/>
      </svg>
    </span>
  )
}
