import React from "react";
import styles from "./styles.module.scss";

type PageProps = {
  children: React.ReactNode;
};

export function Page ({ children }: PageProps) {
  return (
    <div className={styles.page}>
      <div className={styles.page_wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
