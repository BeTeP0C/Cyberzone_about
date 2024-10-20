import React from "react";
import styles from "./styles.module.scss"
import { FooterApps } from "./FooterApps";
import { FooterNav } from "./FooterNav";
import { FooterContacts } from "./FooterContacts";

export function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterApps />
        <FooterNav />
        <FooterContacts />
        <span className={styles.copyright}>
          Copyright © 2023 cyber.mirea.ru - Киберспортивный центр РТУ МИРЭА. Все права защищены.
        </span>
      </div>
    </footer>
  )
}
