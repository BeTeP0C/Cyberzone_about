import React from "react";
import styles from "./styles.module.scss";

type THeaderItem = {
  key: number;
  info: {
    text: string;
    href: string;
  }
};

export function HeaderItem(props: THeaderItem) {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={props.info.href}>
        {props.info.text}
      </a>
    </li>
  );
}
