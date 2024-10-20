import React from "react";
import styles from "./style.module.scss";
import { HeaderList } from "./HeaderList";
import { HeaderItem } from "./HeaderItem";
import { HeaderLogo } from "../Icons";
import { headerItems } from "../../common/headerItems";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <HeaderLogo />
        </div>

        <nav className={styles.nav}>
          <HeaderList>
            {headerItems.map((el) => {
              return <HeaderItem key={el.key} info={el.info}/>
            })}
          </HeaderList>
        </nav>

        <button className={styles.button}>
          <span className={styles.button_text}>ВХОД</span>
        </button>
      </div>
    </header>
  );
}
