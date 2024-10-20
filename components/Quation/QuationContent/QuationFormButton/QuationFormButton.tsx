import React from "react";
import styles from "./styles.module.scss"

type TButtonProps = {
  flags: boolean[]
}

export function QuationFormButton ({flags}: TButtonProps) {
  const checkForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    for (let i=0; i < flags.length - 1; i++) {
      if (flags[i]) {
        return
      }
    }
  }

  return (
    <button onClick={checkForm} className={styles.button}>
      <span className={styles.button_text}>отправить</span>
    </button>
  )
}
