import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { type } from "os";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import Carr from "../cart/Carr";

type Props = {
  val?: boolean;
  // a?: number | boolean;
};
interface valores {
  id?: number;
  name?: string | null;
  email?: string;
}

const Home = ({ val }: Props) => {
  const [valor] = useState<boolean | string | null>(
    sessionStorage.getItem("val")
  );
  const [dados, setdados] = useState<Array<valores>>();
  const [id, setId] = useState<number | undefined>();
  const [scarch, setScarch] = useState("");

  const scLower = scarch.toLocaleLowerCase();
  const user = dados?.filter((us) =>
    us.name?.toLocaleLowerCase().includes(scLower ? scLower : "")
  );
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
    <div className={styles.elements}>
      {!valor ? (
        ""
      ) : (
        <div className={styles.dados}>
          <label>
            <span>buscar usuario</span>
            <input
              type="search"
              value={scarch}
              onChange={(e) => setScarch(e.target.value)}
            />
          </label>
          {user
            ? user.map((d: valores) => {
                return (
                  <div
                    key={d.id}
                    onClick={() => {
                      setId(d.id);
                    }}
                    className={styles.dado}
                  >
                    <div className={styles.text}>
                      <p>{d.name}</p>
                      <p>{d.email}</p>
                    </div>

                    <div className={styles.buttons}>
                      <button style={{ color: "green" }} type="button">
                        <AiFillEdit />
                      </button>
                      <button style={{ color: "red" }} typeof="button">
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      )}
      <div className={styles.info}>
        <h1>Usuario</h1>
        <h2>{dados ? dados[id ? id - 1 : 0].name : ""}</h2>
        <p>{dados ? dados[id ? id - 1 : 0].email : ""}</p>
      </div>
    </div>
  );
};

export default Home;
