import React from "react";
import styles from "./styles.module.scss"
import Link from "next/link";

type THeroItem = {
  key: number;
  info: {
    text: string;
    href: string;
  },
};

export function HeroItem (props: THeroItem) {
  const [linkActive, setLinkActive] = React.useState(false)

  React.useEffect(() => {
    if (window.location.href === props.info.href) {
      console.log(window.location.href, props.info.href)
      setLinkActive(true)
    }
  })

  return (
    <li className={styles.item}>

      <Link className={styles.link + " " + `${linkActive ? styles.link_active : styles.link}`} href={props.info.href}>
        {props.info.text}
      </Link>
    </li>
  );
}
