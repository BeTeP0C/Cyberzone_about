import React from "react";
import styles from "./styles.module.scss"
import { TLider } from "../../../types/lider";

export function Lider ({nickname, names, liderName, src}: TLider) {
  return (
    <li className={styles.item}>
      <img className={styles.img} src={src} alt="" />

      <div className={styles.info}>
        <h2 className={styles.nick}>{nickname}</h2>
        <h3 className={styles.name}>{names}</h3>
        <span className={styles.liderName}>{liderName}</span>
      </div>
    </li>
  )
}
