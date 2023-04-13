import { ChangeEvent, useState } from "react";
import styles from "./Insert.module.css";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { render } from "@testing-library/react";

interface Props {
  md: string;
  cl: () => void;
  reload: () => void;
}

type i = string | number | undefined;

const Insert = ({ md, cl, reload }: Props) => {
  const [nome, setNome] = useState<i>();
  const [img, setImg] = useState<i>("");
  const [email, setEmail] = useState<i>();
  const [idade, setIdade] = useState<i>();
  const [msg, setMsg] = useState<string>("");
  const [modal, setModal] = useState(styles.insertN);
  // const url = "http://localhost:1999/home/insert.php";
  const url = "http://localhost:1999/home/insert.php";
  const dados = {
    nome,
    email,
    idade,
    img,
  };

  const handImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setImg(files?.item(0)?.name);
    console.log(files);
  };
  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setNome("");
    setIdade("");
    axios.post(url, dados, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
          <span>Imagem</span>
          <input type="file" accept="image/*" onChange={handImg} />
        </label>
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
