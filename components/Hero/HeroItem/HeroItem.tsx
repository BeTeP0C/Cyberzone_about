import React from "react";
import styles from "./styles.module.scss"

type THeroItem = {
  key: number;
  info: {
    text: string;
    href: string;
  }
};

export function HeroItem (props: THeroItem) {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={props.info.href}>
        {props.info.text}
      </a>
    </li>
  );
}
