import React from "react";
import styles from "./styles.module.scss";
import { QuationFormError } from "../QuationFormError";
import { TInputProps } from "../../../../types/inputprops";

export function QuationInputName ({flag, text, setFlag}: TInputProps) {
  const checkInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value

    if (value.trim() === "") {
      setFlag({
        flag: true,
        text: "Поле пустое"
      })
    } else if (value.length < 2) {
      setFlag({
        flag: true,
        text: "Имя должно быть больше 2 символов"
      })
    } else if (value.length > 20) {
      setFlag({
        flag: true,
        text: "Имя должно быть меньше 20 символов"
      })
    } else {
      setFlag({
        flag: false,
        text: ""
      })
    }
  }

  return (
    <div className={styles.name}>
      <h3 className={styles.title}>
        Как к вам обращаться<span className={styles.bold}>?</span>
      </h3>

      <div className={styles.management}>
        {flag ? <QuationFormError text={text}/> : ""}

        <input onBlur={checkInput} className={styles.input} type="text" placeholder="Введите ваше имя сюда..."/>
      </div>
    </div>
  )
}
