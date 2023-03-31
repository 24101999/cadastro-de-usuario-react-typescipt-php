import { type } from "os";
import React, { useState, ChangeEvent } from "react";
import styles from "./Form.module.css";
import axios from "axios";

interface Props {}

interface inputs {
  nome: string;
  email: string | number;
  senha: string | number;
}

type inp = string | number | null;

// type ev = string;

const Form = ({}: Props) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string | number>("");
  const [senha, setSenha] = useState<string | number>("");

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // axios.post("http://127.0.0.1:8000/", {
    //   email,
    //   nome,
    //   senha,
    // });

    axios
      .post("http://127.0.0.1:8000/very", {
        nome: email,
        email: email,
        senha: senha,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={sub}>
        <h1>Login</h1>
        <label>
          <span>Nome</span>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSenha(e.target.value)
            }
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Form;
