import React from "react";
import styles from "./styles.module.scss"
import { footerApps } from "../../../common/footerApps";
import logo from "../../../public/footer_logo.png"
import { FooterLogo } from "../../Icons/FooterLogo";
import { FooterApp } from "./FooterApp/FooterApp";

export function FooterApps() {
  return (
    <div className={styles.content}>
      <FooterLogo />
      <ul className={styles.list}>
        {footerApps.map((el) => {
          return <FooterApp key={el.id} id={el.id} href={el.href} Icon={el.Icon}/>
        })}
      </ul>
    </div>
  )
}
