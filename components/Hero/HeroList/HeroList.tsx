import React from "react";
import styles from "./styles.module.scss"

type THeroList = {
  children: React.ReactNode
}

export function HeroList ({children}: THeroList) {
  return (
    <ul className={styles.list}>{children}</ul>
  )
}
