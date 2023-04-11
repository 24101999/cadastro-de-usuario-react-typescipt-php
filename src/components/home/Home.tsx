import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { type } from "os";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import img from "../../logo.svg";
import Insert from "../admin/insert/Insert";

type Props = {
  val?: boolean;
  // a?: number | boolean;
};
interface valores {
  id?: number;
  nome?: string | undefined;
  email?: string;
  idade?: number | string;
}

type idDel = number | undefined;

const Home = ({ val }: Props) => {
  const [valor] = useState<boolean | string | null>(
    sessionStorage.getItem("val")
  );
  const [dados, setdados] = useState<Array<valores>>();
  const [id, setId] = useState<number | undefined>();
  const [scarch, setScarch] = useState("");
  const [modal, setModal] = useState(styles.insertN);
  const scLower = scarch.toLocaleLowerCase();
  const user = dados?.filter((us) =>
    us.nome?.toLocaleLowerCase().includes(scLower ? scLower : "")
  );
  const nav = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:1999/home").then((res) => {
      setdados(res.data);
    });
    if (!valor) {
      nav("/");
    }
  }, []);

  const get = () => {
    setTimeout(() => {
      axios.get("http://localhost:1999/home").then((res) => {
        setdados(res.data);
      });
    }, 300);
  };

  const open = () => {
    setModal(styles.insert);
  };

  const closs = () => {
    setModal(styles.insertN);
  };

  const deletar = (e: idDel | undefined) => {
    axios.delete(`http://localhost:1999/home/delete.php?id=${e}`);
    get();
  };
  return (
    <>
      <Insert md={modal} cl={closs} reload={get} />
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
            <button onClick={open}>ADICIONAR USUARIO</button>
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
                        <p>{d.nome}</p>
                        <p>{d.email}</p>
                        <p>{d.idade}</p>
                      </div>

                      <div className={styles.buttons}>
                        <button
                          style={{ color: "green" }}
                          onClick={() => nav(`/edit/${d.id}`)}
                          type="button"
                        >
                          <AiFillEdit />
                        </button>
                        <button
                          style={{ color: "red" }}
                          onClick={() => deletar(d.id)}
                          typeof="button"
                        >
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
          <img src={img} alt="" />
          <h2>{dados ? dados[id ? id - 1 : 0].nome : ""}</h2>
          <p>{dados ? dados[id ? id - 1 : 0].email : ""}</p>
          <p>{dados ? dados[id ? id - 1 : 0].idade : ""}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
