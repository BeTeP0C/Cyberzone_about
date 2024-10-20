import React from "react";
import styles from "./styles.module.scss"
import { OurContactsList } from "./OurContactsList";
import { OurContactsMap } from "./OurContactsMap/OurContactsMap";

export function OurContacts () {
  return (
    <section className={styles.ourContacts}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            Наши контакты<span className={styles.bold}>:</span>
          </h2>

          <OurContactsList />
        </div>
        <OurContactsMap width={520} height={520}/>
      </div>
    </section>
  )
}
