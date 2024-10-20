import React from "react";
import styles from "./styles.module.scss"
import { Info } from "./Info";
import { Achievement } from "./Achievement";

export function Contacts () {
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <Info />
        <Achievement />
      </div>
    </section>
  )
}
