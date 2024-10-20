import React from "react";
import styles from "./styles.module.scss"
import { ourContactsItems } from "../../../common/ourContactsItems";
import { OurContact } from "../OurContact/OurContact";

export function OurContactsList () {
  return (
    <ul className={styles.list}>
      {ourContactsItems.map(({id, Icon, text}) => {
        return <OurContact key={id} Icon={Icon} text={text}/>
      })}
    </ul>
  )
}
