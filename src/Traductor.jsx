import "../src/Traductor.css";

export const Traductor = ({ mensaje }) => {

  const traducir = (texto) => {
    return texto.replace(/[aeou]/gi, "i");
  };

  return <div className="Traducido">{traducir(mensaje)}</div>;
};
