import React, { ChangeEvent, useState } from "react";

import styles from "./Cadastro.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {}

type inputs = string | number;

const Cadastro = ({}: Props) => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const regExStr = /^[a-z 0-9]?/i;
  const regExEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;

  const nav = useNavigate();
  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const val = {
      email: email,
      senha: senha,
    };

    if (!regExEmail.test(email) || !email) {
      nav("/cadastro");
    } else if (!regExStr.test(senha) || !senha) {
      nav("/cadastro");
    } else {
      axios
        .post("http://localhost:1999/login/insert.php", {
          email: email,
          senha: senha,
        })
        .then((res) => {
          if (res.data) {
            nav("/cadastro");
          } else {
            nav("/");
          }
        });
    }
  };

  return (
    <div className={styles.cadastro}>
      <h1>Cadastro</h1>
      <form onSubmit={sub}>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
