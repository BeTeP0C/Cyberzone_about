import React from "react";
import styles from "./styles.module.scss"

type THeaderList = {
    children: React.ReactNode,
}

export function HeaderList ({children}: THeaderList) {
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    )
}
