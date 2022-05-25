import React from "react";
import styles from "./ComponentA.module.css";

function ComponentA() {
  return <h1 className={`${styles.title} bg-common-yellow`}>Componente A</h1>;
}

export default ComponentA;
