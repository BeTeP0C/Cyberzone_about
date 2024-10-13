import React from "react";
import styles from "./styles.module.scss"

export function Info () {
  return (
    <div className={styles.info}>
      <h2 className={styles.heading}>
        Играй, твори и получай <span className={styles.orange}>удовольствие</span> только у нас!
      </h2>

      <p className={styles.descr}>
        Наш Киберспортивный Центр всегда рад помочь вам с проведением мероприятий разного типа и масштаба. Начиная от организации дня рождения вашего двоюродного деда, заканчивая проведением крупного турнира.
      </p>
    </div>
  )
}
