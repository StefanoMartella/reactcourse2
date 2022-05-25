import React from "react";
import styles from "./ComponentB.module.css";

function ComponentB() {
  return <h1 className={`${styles.title} bg-common-yellow`}>Componente B</h1>;
}

export default ComponentB;
