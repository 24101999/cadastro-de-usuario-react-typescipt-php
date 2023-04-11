import React, { ChangeEvent, useState, useEffect } from "react";
import styles from "./Edit.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { type } from "os";

type Props = {};

type inputs = string | number;

interface d {
  name?: string | undefined;
}

const Edit = (props: Props) => {
  const [nome, setNome] = useState<inputs>();
  const [email, setEmail] = useState<inputs>();
  const [idade, setIdade] = useState<inputs>();
  const [dados, setDados] = useState<d>();
  const url = "";
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDados(res.data);
      });
  }, []);

  const elemntos = {
    nome,
    email,
    idade,
  };

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(url, elemntos);
    // console.log(dados ? dados.name : "");
    // console.log(id);
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
            placeholder={dados ? dados.name : ""}
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
            placeholder={dados ? dados.name : ""}
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
            placeholder={dados ? dados.name : ""}
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
