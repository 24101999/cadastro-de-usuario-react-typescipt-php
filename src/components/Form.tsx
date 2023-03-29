import { type } from "os";
import React, { useState, ChangeEvent } from "react";

interface Props {}

interface inputs {
  nome: string;
  email: string | number;
}

type inp = string | number | null;

// type ev = string;

const Form = ({}: Props) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string | number>("");

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={sub}>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Form;
