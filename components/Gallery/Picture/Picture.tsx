import React from "react";
import styles from "./styles.module.scss"

type TPictureProps = {
  id: number,
  src: string
}

export function Picture ({id, src}) {
  return (
    <li key={id} className={styles.item}>
      <img  className={styles.img} src={src} alt="" />
    </li>
  )
}
