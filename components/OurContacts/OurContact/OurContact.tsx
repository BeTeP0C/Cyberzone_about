import React from "react";
import styles from "./styles.module.scss"
import { TOurContacts } from "../../../types/ourcontacts";

export function OurContact ({Icon, text}: TOurContacts) {
  return (
    <li className={styles.item}>
      <Icon />

      <span className={styles.text}>{text}</span>
    </li>
  )
}
