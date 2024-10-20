import React from "react";
import styles from "./styles.module.scss"
import { SocialList } from "./SocialList";
import { Social } from "./Social/Social";
import { socialItems } from "../../common/socialItems";

export function Socials () {
  return (
    <section className={styles.social}>
      <div className={styles.container}>
        <h2 className={styles.heading}>НАШИ СОЦСЕТИ</h2>

        <SocialList>
          {socialItems.map((el) => {
            return <Social sub={el.sub} Icon={el.Icon} key={el.id}/>
          })}
        </SocialList>
      </div>
    </section>
  )
}
