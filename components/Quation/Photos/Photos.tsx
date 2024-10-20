import React from "react";
import styles from "./styles.module.scss"
import img1 from "../../../public/quation_img_1.png"
import img2 from "../../../public/quation_img_2.png"
import img3 from "../../../public/quation_img_3.png"

export function Photos () {
  return (
    <div className={styles.content}>
      <img className={styles.img1} src={img1.src} alt="" />
      <img className={styles.img2} src={img2.src} alt="" />
      <img className={styles.img3} src={img3.src} alt="" />
    </div>
  )
}
