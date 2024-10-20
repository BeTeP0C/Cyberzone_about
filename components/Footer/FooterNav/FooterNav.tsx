import React from "react";
import styles from "./styles.module.scss"
import { footerNavLinks } from "../../../common/footerNavLinks";
import { FooterLink } from "./FooterLink";

export function FooterNav () {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {footerNavLinks.map(({id, href, text}) => {
          return <FooterLink key={id} id={id} href={href} text={text}/>
        })}
      </ul>
    </div>
  )
}
