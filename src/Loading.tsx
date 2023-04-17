import React from "react";
import styles from "./Loading.module.css";
import img from "./Rolling-1s-200px (1).svg";
type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={styles.loading}>
      <img src={img} alt="" />
    </div>
  );
};

export default Loading;
