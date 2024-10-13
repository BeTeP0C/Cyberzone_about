import React from "react";
import styles from "./styles.module.scss"
import { HeroList } from "./HeroList";
import { HeroItem } from "./HeroItem";
import { heroItems } from "../../common/heroItems";

export function Hero () {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <HeroList>
          {heroItems.map((el) => {
            return <HeroItem key={el.key} info={el.info}/>
          })}
        </HeroList>

        <div className={styles.gradient}></div>
      </div>
    </section>
  )
}
