import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../../../types/icons";

type TContactProps = {
  id: number,
  href: string,
  Icon: ({ width, height }: IconProps) => JSX.Element,
  text: string
}

export function FooterContact ({id, href, Icon, text}: TContactProps) {
  return (
    <li key={id} className={styles.item}>
      <a className={styles.link} href={href}>
        <Icon />

        {text}
      </a>
    </li>
  )
}
