import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss"
import { footerContacts } from "../../../common/footerContacts";
import { FooterContact } from "./FooterContact/FooterContact";

export function FooterContacts () {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {footerContacts.map(({id, href, Icon, text}) => {
          return <FooterContact key={id} href={href} id={id} Icon={Icon} text={text}/>
        })}
      </ul>

      <address className={styles.address}>
        г. Москва, проспект Вернадского 78, строение 7
      </address>
    </div>
  )
}
