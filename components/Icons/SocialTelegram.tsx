import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function SocialTelegram ({width = 70, height = 70}: IconProps) {
  return (
    <span className={styles.social}>
      <svg width={width} height={height} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 0C15.68 0 0 15.68 0 35C0 54.32 15.68 70 35 70C54.32 70 70 54.32 70 35C70 15.68 54.32 0 35 0ZM51.24 23.8C50.715 29.33 48.44 42.77 47.285 48.965C46.795 51.59 45.815 52.465 44.905 52.57C42.875 52.745 41.335 51.24 39.375 49.945C36.295 47.915 34.545 46.655 31.57 44.695C28.105 42.42 30.345 41.16 32.34 39.13C32.865 38.605 41.825 30.45 42 29.715C42.0243 29.6037 42.0211 29.4881 41.9906 29.3783C41.9601 29.2685 41.9033 29.1678 41.825 29.085C41.615 28.91 41.335 28.98 41.09 29.015C40.775 29.085 35.875 32.34 26.32 38.78C24.92 39.725 23.66 40.215 22.54 40.18C21.28 40.145 18.9 39.48 17.115 38.885C14.91 38.185 13.195 37.8 13.335 36.575C13.405 35.945 14.28 35.315 15.925 34.65C26.145 30.205 32.935 27.265 36.33 25.865C46.06 21.805 48.055 21.105 49.385 21.105C49.665 21.105 50.33 21.175 50.75 21.525C51.1 21.805 51.205 22.19 51.24 22.47C51.205 22.68 51.275 23.31 51.24 23.8Z" fill="#FF9900"/>
      </svg>


    </span>
  )
}