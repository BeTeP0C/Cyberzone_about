import React from "react";
import styles from "./styles.module.scss"
import { Lider } from "../Lider/Lider";
import { TLider } from "../../../types/lider";

type TLidersProps = {
  liders: TLider[]
}

export function LidersList ({liders}: TLidersProps) {
  return (
    <ul className={styles.list}>
      {liders.map((el) => {
        return <Lider key={el.id} id={el.id} nickname={el.nickname} names={el.names} src={el.src} liderName={el.liderName}/>
      })}
    </ul>
  )
}
