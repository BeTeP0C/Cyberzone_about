import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../../../types/icons";

type TAppProps = {
  id: number,
  href: string,
  Icon: ({ width, height }: IconProps) => JSX.Element
}

export function FooterApp ({id, href, Icon}: TAppProps) {
  return (
    <li key={id} className={styles.item}>
      <a className={styles.link} href={href}>
        <Icon />
      </a>
    </li>
  )
}
