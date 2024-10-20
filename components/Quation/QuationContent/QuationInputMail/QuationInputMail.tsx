import React from "react";
import styles from "./styles.module.scss"
import { QuationFormError } from "../QuationFormError";
import { TInputProps } from "../../../../types/inputprops";

export function QuationInputMail ({flag, text, setFlag}: TInputProps) {
  const checkInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value

    if (value.trim() === "") {
      setFlag({
        flag: true,
        text: "Поле пустое"
      })
    } else if (!value.includes("@")) {
      setFlag({
        flag: true,
        text: "Неккоректный вводи почты"
      })
    } else {
      setFlag({
        flag: false,
        text: ""
      })
    }
  }

  return (
    <div className={styles.mail}>
      <h3 className={styles.title}>
        Ваша почта
      </h3>

      <div className={styles.management}>
        {flag ? <QuationFormError text={text}/> : ""}

        <input onBlur={checkInput} className={styles.input} type="email" placeholder="Введите адрес электронной почты..."/>
      </div>
    </div>
  )
}
