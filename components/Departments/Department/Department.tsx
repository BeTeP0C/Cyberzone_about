import React from "react";
import styles from "./styles.module.scss"

type TDepartment = {
  text: string,
  pos: string,
  id: number,
  src: string
}

export function Department ({pos, src, text}: TDepartment) {
  return (
    <li className={styles.item} style={{gridColumn: pos}}>
      <img className={styles.img} src={src} alt="" />
      <h3 className={styles.heading}>{text}</h3>
    </li>
  )
}
