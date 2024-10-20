import React from "react";
import styles from "./styles.module.scss"
import { galleryItems } from "../../common/galleryItems";
import { Picture } from "./Picture";

export function Gallery () {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.heading}>ФОТОГАЛЛЕРЕЯ</h2>

        <div className={styles.content}>
          <ul className={styles.list}>
            {galleryItems.map(({id,src}) => {
              return <Picture key={id} id={id} src={src}/>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
