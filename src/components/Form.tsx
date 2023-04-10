import { type } from "os";
import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import axios from "axios";

interface Props {}

interface inputs {
  email: string | number;
  senha: string | number;
}

type inp = string | number;

// type ev = string;

const Form = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState<inp>("");
  const nav = useNavigate();

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:1999/login/val.php", {
        email: email,
        senha: senha,
      })
      .then((res) => {
        if (!res.data) {
          sessionStorage.setItem("val", res.data);
          nav("/");
        } else if (res.data) {
          sessionStorage.setItem("val", res.data);
          nav("/home");
        }
        // console.log(res.data);
      });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={sub}>
        <h1>Login</h1>
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
      <button className={styles.btCadastro} onClick={() => nav("/cadastro")}>
        <h2>
          <strong>Cadastre-se</strong>
        </h2>
      </button>
    </div>
  );
};

export default Form;
