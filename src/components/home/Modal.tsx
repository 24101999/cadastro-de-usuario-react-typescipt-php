import React from "react";
import styles from "./Modal.module.css";
interface Props {
  md?: string;
  cl?: () => void;
}

const Modal = ({ md, cl }: Props) => {
  return (
    <div className={md}>
      <button className={styles.close} onClick={cl}>
        close
      </button>
      <h1>Tem certeza ?</h1>
      <button>Sim</button>
      <button>Não</button>
    </div>
  );
};

export default Modal;
