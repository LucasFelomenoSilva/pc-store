import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/Store.css";
import { stores } from "./Home";
import B760M from "../images/B760M.png";
import Ryzen5 from "../images/Ryzen5.png";
import i7 from "../images/i7.png";
import P4070 from "../images/4070.png";
import B550M from "../images/B550M.png";
import RX7600 from "../images/RX7600.png";

const products = [
  // Produto ID 1 - Placa mãe
  {
    id: 1,
    storeId: 1,
    name: "Placa Mãe Gigabyte B760M AORUS ELITE",
    description:
      "Com a tecnologia se movendo tão rápido, a GIGABYTE ainda acompanha as últimas tendências e oferece aos nossos clientes recursos avançados e tecnologia de ponta. As placas-mãe GIGABYTE Série B660 vêm com solução de energia atualizada, padrões de armazenamento mais recentes e conectividade excepcional para otimizar o desempenho para jogos. O desempenho sem aceleração das placas-mãe GIGABYTE Série B660 é garantido por um design térmico inovador e otimizado para garantir a melhor estabilidade de CPU, chipset, SSD e baixas temperaturas sob carga total e jogos. As placas-mãe GIGABYTE Série B660 permitem que você experimente a máxima flexibilidade de conexão e velocidade de transferência de dados incrível com rede e armazenamento de última geração.",
    preco: "939,99",
    imageSrc: B760M
  },
  // Produto ID 2 - Placa mãe
  {
    id: 2,
    storeId: 2,
    name: "Processador AMD Ryzen 5 5600G",
    description:
      "O Ryzen 5 5600G conta com 6 núcleos incríveis para quem quer apenas jogar. Os processadores AMD Ryzen série 5000 capacitam a próxima geração de jogos exigentes, proporcionando experiências imersivas únicas e dominando qualquer tarefa multithread como 3D e renderização de vídeo e compilação de software.",
    preco: "899,00",
    imageSrc: Ryzen5
  },
  // Produto ID 3 - Processador
  {
    id: 3,
    storeId: 3,
    name: "Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4070",
    description:
      "Chokes de metal de alta qualidade com certificação Ultra Durable, capacitores sólidos ESR mais baixos, PCB de cobre de 2 onças e MOSFETs RDS(on) mais baixos, além de design de temperatura excessiva para oferecer desempenho superior e vida útil mais longa do sistema.",
    preco: "4.899,00",
    imageSrc: P4070
  },
  // Produto ID 4 - Processador
  {
    id: 4,
    storeId: 2,
    name: "Intel Core i7-13700K",
    description:
      "Processador para desktop Intel Core i7-13700K da 13ª geração. Com a tecnologia Intel Turbo Boost Max 3.0, e suporte PCIe 5.0 & 4.0, suporte DDR5 e DDR4, os processadores desbloqueados para desktop Intel Core i7 da 13ª Geração são otimizados para jogadores e produtividade e ajudam a oferecer alto desempenho.",
    preco: "2.648,99",
    imageSrc: i7
  },
  // Produto ID 5 - Placa de Vídeo
  {
    id: 5,
    storeId: 1,
    name: "Placa Mãe Asus TUF Gaming B550M-Plus",
    description:
      "A TUF Gaming B550M-PLUS reúne os elementos essenciais da mais recente plataforma AMD e os combina com funcionalidades prontas para jogos e durabilidade comprovada. Projetadas com componentes de nível militar, soluções de energia aprimoradas e um conjunto abrangente de opções de refrigeração, essas placas-mãe oferecem desempenho sólido com estabilidade inabalável em jogos.",
    preco: "939,00",
    imageSrc: B550M
  },
  // Produto ID 6 - Placa de Vídeo
  {
    id: 6,
    storeId: 3,
    name: "Placa De Vídeo Gigabyte AMD Radeon RX 7600",
    description:
      "A placa de vídeo AMD Radeon RX 7600 define um novo nível de desempenho para gamers e streamers. Apresentando unidades de computação AMD RDNA 3 unificadas e velocidades de clock incrivelmente rápidas, para permitir desempenho avançado de jogos com alta taxa de atualização em 1080p.",
    preco: "1.759,00",
    imageSrc: RX7600
  }
];

const Store = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();

  const selectedStore = stores.find(
    (store) => store.id === parseInt(storeId, 10)
  );

  if (!selectedStore) {
    return <div>Loja não encontrada.</div>;
  }

  const filteredProducts = products.filter(
    (product) => product.storeId === parseInt(storeId, 10)
  );

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="store-container">
      <h2>Produtos da Loja {selectedStore.name}</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li className="product-item" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <img
              src={product.imageSrc}
              alt={product.name}
              width={400}
              height={400}
            />
            <p className="product-description">{product.description}</p>
            <p className="product-preco">R${product.preco}</p>
            <Link to={`/product/${product.id}`} className="store-link">
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleBackToHome} className="back-button">
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default Store;
