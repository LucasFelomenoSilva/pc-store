import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export const stores = [
  {
    id: 1,
    name: "Placa Mãe",
    description: "Confira uma lista com as melhores placas mães da atualidade."
  },
  {
    id: 2,
    name: "Processador",
    description:
      "Confira uma lista de processadores compatíveis com as placas mães."
  },
  {
    id: 3,
    name: "Placa de Vídeo",
    description: "Confira as placas de vídeo mais potentes da atualidade."
  }
];

function Home() {
  return (
    <div>
      <h2>Escolha um componente:</h2>
      <ul className="store-list">
        {stores.map((store) => (
          <li className="store-item" key={store.id}>
            <h3 className="store-name">{store.name}</h3>
            <p className="store-description">{store.description}</p>
            <Link to={`/store/${store.id}`} className="store-link">
              Ver componentes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
