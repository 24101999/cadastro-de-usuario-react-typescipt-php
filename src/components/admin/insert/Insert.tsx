import { ChangeEvent, useState } from "react";
import styles from "./Insert.module.css";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  md: string;
  cl: () => void;
  reload: () => void;
}

type i = string | number;

interface inp {
  name: string;
  email: string;
  idade: number;
}

const Insert = ({ md, cl, reload }: Props) => {
  const [nome, setNome] = useState<i>();
  const [email, setEmail] = useState<i>();
  const [idade, setIdade] = useState<i>();
  const [msg, setMsg] = useState<string>("");
  const [modal, setModal] = useState(styles.insertN);
  const url = "http://localhost:1999/home/insert.php";
  const dados = {
    nome,
    email,
    idade,
  };

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setNome("");
    setIdade("");
    axios.post(url, dados);
    cl();
    reload();
  };

  return (
    <div className={md}>
      <button className={styles.close} onClick={cl}>
        <AiOutlineCloseCircle />
      </button>
      <h1>Cadastro</h1>
      <form onSubmit={sub}>
        <label>
          <span>nome</span>
          <input
            type="text"
            value={nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
          />
        </label>
        <label>
          <span>email</span>
          <input
            type="text"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </label>
        <label>
          <span>idade</span>
          <input
            type="text"
            value={idade}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIdade(e.target.value)
            }
          />
        </label>
        <button>cadastrar</button>
      </form>
    </div>
  );
};

export default Insert;
