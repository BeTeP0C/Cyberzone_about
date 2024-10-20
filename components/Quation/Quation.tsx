import React from "react";
import styles from "./styles.module.scss"
import { QuationContent } from "./QuationContent";
import { Photos } from "./Photos";

export function Quation () {
  return (
    <section className={styles.quation}>
      <div className={styles.container}>
        <Photos />
        <QuationContent />
      </div>
    </section>
  )
}
