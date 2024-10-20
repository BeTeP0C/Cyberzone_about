import React from "react";
import styles from "./styles.module.scss"
import { QuationFormError } from "../QuationFormError";
import { TInputProps } from "../../../../types/inputprops";

export function QuationInputText ({flag, text, setFlag}: TInputProps) {
  const checkInput = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    const value = e.target.value

    if (value.trim() === "") {
      setFlag({
        flag: true,
        text: "Поле пустое"
      })
    }  else {
      setFlag({
        flag: false,
        text: ""
      })
    }
  }

  return (
    <div className={styles.text}>
      <h3 className={styles.title}>
        Ваш вопрос <span className={styles.bold}>/</span> предложение
      </h3>

      <div className={styles.management}>
        {flag ? <QuationFormError text={text}/> : ""}

        <textarea onBlur={checkInput} className={styles.input} placeholder="Сюда нужно написать суть вашего письма..." name="" id=""></textarea>
      </div>
    </div>
  )
}
