import React from "react";
import styles from "./styles.module.scss"
import { WantWrite } from "../Icons/WantWrite";

export function Want () {
  return (
    <section className={styles.want}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.heading}>ХОЧЕШЬ К НАМ?</h2>
            <p className={styles.descr}>
              Мы постоянно заинтеросованы в новых кадрах с горящими глазами. Скорее заполняй заявку по понравившемуся направлению и вступай в наши ряды!
            </p>

            <button className={styles.button}>
              <WantWrite />

              <span className={styles.button_text}>
                Заполнить форму
              </span>
            </button>
          </div>
        </div>
        <span className={styles.bg_icon}></span>
      </div>
    </section>
  )
}
