import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function FooterMail ({width = 12, height = 10}: IconProps) {
  return (
    <span className={styles.footerContact}>
      <svg width={width} height={height} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 0.333984H1.33341C0.691748 0.333984 0.172581 0.858984 0.172581 1.50065L0.166748 8.50065C0.166748 9.14232 0.691748 9.66732 1.33341 9.66732H10.6667C11.3084 9.66732 11.8334 9.14232 11.8334 8.50065V1.50065C11.8334 0.858984 11.3084 0.333984 10.6667 0.333984ZM10.4334 2.81315L6.30925 5.39148C6.12258 5.50815 5.87758 5.50815 5.69091 5.39148L1.56675 2.81315C1.50826 2.78032 1.45703 2.73595 1.41618 2.68275C1.37533 2.62954 1.3457 2.5686 1.32908 2.50362C1.31247 2.43863 1.30921 2.37095 1.31951 2.30466C1.3298 2.23838 1.35344 2.17488 1.389 2.11799C1.42455 2.06111 1.47127 2.01203 1.52634 1.97373C1.58141 1.93543 1.64367 1.9087 1.70937 1.89516C1.77507 1.88162 1.84283 1.88155 1.90855 1.89495C1.97428 1.90836 2.0366 1.93496 2.09175 1.97315L6.00008 4.41732L9.90841 1.97315C9.96356 1.93496 10.0259 1.90836 10.0916 1.89495C10.1573 1.88155 10.2251 1.88162 10.2908 1.89516C10.3565 1.9087 10.4188 1.93543 10.4738 1.97373C10.5289 2.01203 10.5756 2.06111 10.6112 2.11799C10.6467 2.17488 10.6704 2.23838 10.6807 2.30466C10.691 2.37095 10.6877 2.43863 10.6711 2.50362C10.6545 2.5686 10.6248 2.62954 10.584 2.68275C10.5431 2.73595 10.4919 2.78032 10.4334 2.81315Z" fill="#181818"/>
      </svg>
    </span>
  )
}
