import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss"
import { QuationInputName } from "../QuationInputName";
import { QuationInputMail } from "../QuationInputMail";
import { QuationInputText } from "../QuationInputText";
import { QuationFormButton } from "../QuationFormButton";

export function QuationForm () {
  const [errorName, setErrorName] = useState({
    flag: true,
    text: ""
  });

  const [errorMail, setErrorMail] = useState({
    flag: true,
    text: ""
  });

  const [errorText, setErrorText] = useState({
    flag: true,
    text: ""
  });

  return (
    <form className={styles.form} action="">
      <div className={styles.info}>
        <QuationInputName flag={errorName.flag} text={errorName.text} setFlag={setErrorName}/>
        <QuationInputMail flag={errorName.flag} text={errorMail.text} setFlag={setErrorMail}/>
      </div>

      <QuationInputText flag={errorText.flag} text={errorText.text} setFlag={setErrorText}/>

      <QuationFormButton flags={[errorName.flag, errorMail.flag, errorText.flag]}/>
    </form>
  )
}
