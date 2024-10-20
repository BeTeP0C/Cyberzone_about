import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../../types/icons";

type TButton = {
  href: string ,
  key: number,
  info: {
    Icon: ({width, height}:IconProps) =>  JSX.Element,
    text: string,
  }
}

export function Button ({href, info}: TButton) {
  const {Icon, text} = info
  return (
    <li className={styles.item}>
      <a className={styles.link} href={href}>
        <Icon />

        <span className={styles.text}>
          {text}
        </span>
      </a>
    </li>
  )
}
