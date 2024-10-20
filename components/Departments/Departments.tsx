import React from "react";
import styles from "./styles.module.scss"
import { DepartmentsList } from "./DepartmentsList";
import { Department } from "./Department/Department";
import { departmentsItem } from "../../common/departmentsItem";

export function Departments () {
  return (
    <section className={styles.departments}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            ОТДЕЛЕНИЯ
          </h2>

          <p className={styles.descr}>
            Мы, как и любая другая крупная организация, состоим из нескольких отделений, которые делятся в зависимости от выполняемой работы.
          </p>
        </div>

        <div className={styles.content}>
          <DepartmentsList>
            {departmentsItem.map((el) => {
              return <Department key={el.id} text={el.text} pos={el.pos} id={el.id} src={el.src}/>
            })}
          </DepartmentsList>
        </div>
      </div>
    </section>
  )
}
