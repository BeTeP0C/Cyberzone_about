import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../../types/icons";

type TSocial = {
  sub: string,
  Icon: ({ width, height }: IconProps) => JSX.Element
}

export function Social ({sub, Icon}: TSocial) {
  return (
    <li className={styles.item}>
      <Icon />

      <div className={styles.info}>
        <h3 className={styles.number}>{sub}</h3>
        <span className={styles.sub}>подписчиков</span>
      </div>
    </li>
  )
}
