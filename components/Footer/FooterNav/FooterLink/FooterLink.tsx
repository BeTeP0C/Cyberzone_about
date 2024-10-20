import React from "react";
import styles from "./styles.module.scss"

type TLinkProps = {
  id: number,
  href: string,
  text: string
}

export function FooterLink ({id, href, text}) {
  return (
    <li key={id} className={styles.item}>
      <a className={styles.link} href={href}>{text}</a>
    </li>
  )
}
