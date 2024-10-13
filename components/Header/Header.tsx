import React from "react";
import styles from "./style.module.scss";
import { HeaderList } from "./HeaderList";
import { HeaderItem } from "./HeaderItem";
import { headerItems } from "../../common/headerItems";
import img from "../../public/logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img className={styles.img} src={img.src} alt="Логотип Кибер зоны" />
        </div>

        <nav className={styles.nav}>
          <HeaderList>
            {headerItems.map((el) => {
              return <HeaderItem key={el.key} info={el.info}/>
            })}
          </HeaderList>
        </nav>

        <button className={styles.button}>ВХОД</button>
      </div>
    </header>
  );
}
