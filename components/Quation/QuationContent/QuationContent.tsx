import React from "react";
import styles from "./styles.module.scss"
import { QuationForm } from "./QuationForm";

export function QuationContent () {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h2 className={styles.heading}>
          Хочешь задать нам очень <span className={styles.bold}>важный вопрос</span> или что-то обсудить?
        </h2>

        <p className={styles.descr}>
          Мы всегда любим поговорить на любые темы, поэтому ты можешь заполнить форму ниже и мы тебе ответим в ближайшее время!
        </p>
      </div>

      <QuationForm />
    </div>
  )
}
