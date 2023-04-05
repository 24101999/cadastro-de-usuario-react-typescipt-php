import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  val?: boolean;
};

interface d {
  id?: number;
  name: string;
  email: string;
}

const Home = ({ val }: Props) => {
  const [valor] = useState<boolean | string | null>(
    sessionStorage.getItem("val")
  );
  const [dados, setdados] = useState<Array<d>>();
  const [car, setCar] = useState<Array<d>>();
  const nav = useNavigate();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setdados(res.data);
    });
    if (!valor) {
      nav("/");
    }
  }, []);

  return (
    <div>
      {!valor ? (
        ""
      ) : (
        <div className={styles.dados}>
          <p>{val}</p>
          <p>home</p>
          {dados
            ? dados.map((d) => {
                return (
                  <div key={d.id} className={styles.dado}>
                    <p>{d.name}</p>
                    <p>{d.email}</p>
                    <button type="button">Comprar</button>
                  </div>
                );
              })
            : ""}
        </div>
      )}
    </div>
  );
};

export default Home;
