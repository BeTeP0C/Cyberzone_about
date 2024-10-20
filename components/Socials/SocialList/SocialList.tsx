import React from "react";
import styles from "./styles.module.scss"

type TSocialList = {
  children: React.ReactNode
}

export function SocialList ({children}: TSocialList) {
  return (
    <ul className={styles.list}>{children}</ul>
  )
}
