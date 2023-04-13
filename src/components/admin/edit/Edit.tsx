import React, { ChangeEvent, useState, useEffect } from "react";
import styles from "./Edit.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { type } from "os";

type Props = {};

type inputs = string | number;

interface d {
  nome?: string;
  email?: string;
  idade?: undefined;
}

const Edit = (props: Props) => {
  const [nome, setNome] = useState<inputs>();
  const [email, setEmail] = useState<inputs>();
  const [idade, setIdade] = useState<inputs>();
  const [dados, setDados] = useState<Array<d>>();
  const param = useParams();
  const id = param.id;
  const nav = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:1999/home/item.php?id=${id}`).then((res) => {
      setDados(res.data);
    });
  }, []);
  const url = `http://localhost:1999/home/update.php?id=${id}`;

  const elemntos = {
    nome,
    email,
    idade,
  };

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(url, elemntos);
    nav("/home");
  };

  return (
    <div className={styles.edit}>
      <h1>EDITAR</h1>
      <form onSubmit={sub}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name=""
            placeholder={dados ? dados[0].nome : ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="text"
            name=""
            placeholder={dados ? dados[0].email : ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </label>
        <label>
          <span>Idade</span>
          <input
            type="text"
            name=""
            placeholder={dados ? dados[0].idade : ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIdade(e.target.value)
            }
          />
        </label>
        <button type="submit">EDITAR</button>
      </form>
    </div>
  );
};

export default Edit;
