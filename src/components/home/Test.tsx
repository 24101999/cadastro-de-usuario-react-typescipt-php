import axios from "axios";
import { useState, useEffect } from "react";

interface d {
  id?: number;
  nome?: string;
  email?: string;
  idade?: number | string;
}
type Props = {
  id: number;
  val?: Array<d>;
};

const Test = ({ id, val }: Props) => {
  const [dados, setDados] = useState<Array<d> | undefined>(val);

  useEffect(() => {
    axios.get(`http://localhost:1999/home/item.php?id=${id}`).then((res) => {
      setDados(res.data);
    });
  }, []);

  return (
    <div>
      {dados ? (
        <div className="">
          <p>{dados[0].nome}</p>
          <p>{}</p>
          <p>{}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Test;
