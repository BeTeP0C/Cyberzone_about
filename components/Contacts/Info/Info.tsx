import React from "react";
import styles from "./styles.module.scss"
import { contactsButton } from "../../../common/contactsButton";
import { Button } from "../Button/Button";

export function Info () {
  return (
    <div className={styles.info}>
      <h2 className={styles.heading}>
        Играй, твори и получай <span className={styles.orange}>удовольствие</span> только у нас!
      </h2>

      <p className={styles.descr}>
        Наш Киберспортивный Центр всегда рад помочь вам с проведением мероприятий разного типа и масштаба. Начиная от организации дня рождения вашего двоюродного деда, заканчивая проведением крупного турнира.
      </p>

      <div className={styles.actives}>
        <ul className={styles.list}>
          {contactsButton.map((el) => {
            return <Button href={el.href} key={el.id} info={el.info}/>
          })}
        </ul>
      </div>
    </div>
  )
}
