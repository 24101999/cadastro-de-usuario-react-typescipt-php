import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Info.module.css";
type Props = {};

interface d {
  id?: number;
  nome?: string;
  email?: string;
  idade?: number;
}

const Info = (props: Props) => {
  const [dados, setDados] = useState<Array<d>>();
  const nav = useNavigate();
  const p = useParams();
  const id = p.id;

  useEffect(() => {
    axios.get(`http://localhost:1999/home/item.php?id=${id}`).then((res) => {
      setDados(res.data);
    });
  });

  return (
    <div className={styles.item}>
      <button
        onClick={() => nav("/home")}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "50px",
          top: 0,
        }}
      >
        voltar
      </button>
      <p>{dados ? dados[0].nome : ""}</p>
      <p>{dados ? dados[0].email : ""}</p>
      <p>{dados ? dados[0].idade : ""}</p>
    </div>
  );
};

export default Info;
