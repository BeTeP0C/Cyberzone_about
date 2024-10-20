import React from "react";
import styles from "./styles.module.scss"
import { LidersList } from "./LidersList";
import { lidersItems } from "../../common/lidersItems";

export function Liders () {
  return (
    <section className={styles.liders}>
      <div className={styles.container}>
        <LidersList liders={lidersItems}/>
      </div>
    </section>
  )
}
