import React from "react";
import styles from "./styles.module.scss"

type TErrorProps = {
  text: string,
}

export function QuationFormError ({text}: TErrorProps) {
  return (
    <span className={styles.error}>{text}</span>
  )
}
