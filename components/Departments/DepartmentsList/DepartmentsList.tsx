import React from "react";
import styles from "./styles.module.scss"

type TDepartmentsList = {
  children: React.ReactNode
}

export function DepartmentsList ({children}: TDepartmentsList) {
  return (
    <ul className={styles.list}>{children}</ul>
  )
}
