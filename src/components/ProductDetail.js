import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetail.css";
import { Link } from "react-router-dom";
import Cartao from "./Cartao";
import P4070 from "../images/4070.png";
import B760M from "../images/B760M.png";
import Ryzen5 from "../images/Ryzen5.png";
import i7 from "../images/i7.png";
import B550M from "../images/B550M.png";
import RX7600 from "../images/RX7600.png";

const products = [
  // Produto ID 1 - Placa mãe
  {
    id: 1,
    name: "Placa Mãe Gigabyte B760M AORUS ELITE",
    description: (
      <div>
        Marca: Gigabyte
        <br />
        Modelo: B760M Aorus Pro AX DDR4
        <br />
        CPU: LGA1700 socket: Support for the 13th and 12th Generation Intel®
        Core™, Pentium® Gold and Celeron® Processors* L3 cache varies with CPU
        <br />
        Chipset: Intel® B760 Express Chipset
        <br />
        Memory: Support for DDR4 5333(O.C.) / 5133(O.C.) / 5000(O.C.) /
        4933(O.C.) / 4800(O.C.) / 4700(O.C.) / 4600(O.C.) / 4500(O.C.) /
        4400(O.C.) / 4300(O.C.) / 4266(O.C.) / 4133(O.C.) / 4000(O.C.) /
        3866(O.C.) / 3800(O.C.) / 3733(O.C.) / 3666(O.C.) / 3600(O.C.) /
        3466(O.C.) / 3400(O.C.) / 3333(O.C.) / 3300(O.C.) / 3200 / 3000 / 2933 /
        2666 / 2400 / 2133 MT/s memory modules 4 x DDR DIMM sockets supporting
        up to 128 GB (32 GB single DIMM capacity) of system memory Dual channel
        memory architecture Support for ECC Un-buffered DIMM 1Rx8/2Rx8 memory
        modules (operate in non-ECC mode) Support for non-ECC Un-buffered DIMM
        1Rx8/2Rx8/1Rx16 memory modules Support for Extreme Memory Profile (XMP)
        memory modules
        <br />
        Onboard Graphics: Integrated Graphics Processor-Intel® HD Graphics
        support: 1 x HDMI port, supporting a maximum resolution of 4096x2160@60
        Hz * Support for HDMI 2.0 version and HDCP 2.3. 1 x DisplayPort,
        supporting a maximum resolution of 4096x2304@60 Hz * Support for
        DisplayPort 1.2 version and HDCP 2.3
      </div>
    ),
    preco: "939,99",
    imageSrc: B760M
  },
  // Produto ID 2 - Placa mãe
  {
    id: 2,
    name: "Processador AMD Ryzen 5 5600G",
    description: (
      <div>
        <p>
          Marca:
          <br />
          AMD
        </p>
        <p>
          Modelo:
          <br />
          100-100000252BOX
        </p>
        <p>
          Soquete:
          <br />
          AM4
        </p>
        <p>
          Núcleos de CPU:
          <br />6
        </p>
        <p>
          Threads:
          <br />
          12
        </p>
        <p>
          Clock base:
          <br />
          3.9 GHz
        </p>
        <p>
          Clock de Max Boost:
          <br />
          Até 4.4 GHz
        </p>
        <p>
          Cache L2 total:
          <br />3 MB
        </p>
        <p>
          Cache L3 total:
          <br />
          16MB
        </p>
        <p>
          Gráfico integrado:
          <br />
          Vega 7
        </p>
        <p>
          CMOS:
          <br />
          TSMC 7nm FinFET
        </p>
        <p>
          TDP / TDP Padrão:
          <br />
          65 W
        </p>
        <p>
          Memória:
          <br />
          Velocidade máxima: 3200 MHz
          <br />
          Tipo: DDR4
        </p>
        <p>
          Especificações da placa de vídeo integrada:
          <br />
          Frequência gráfica: 1900MHz
          <br />
          Modelo gráfico: Radeon Graphics
          <br />
          Contagem de núcloes gráficos: 7
        </p>
        <p>
          Acompanha Cooler:
          <br />
          Sim Wraith Stealth
        </p>
      </div>
    ),
    preco: "899,00",
    imageSrc: Ryzen5
  },
  // Produto ID 3 - Processador
  {
    id: 3,
    name: "Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4070",
    description: (
      <div>
        <p>
          Marca: Gigabyte
          <br />
          Modelo: GV-N4070AERO OC-12GD
          <br />
          Core Clock: 2565 MHz (Reference Card: 2475 MHz)
          <br />
          CUDA Cores: 5888
          <br />
          Memory Clock: 21 Gbps
          <br />
          Memory Size: 12 GB
          <br />
          Memory Type: GDDR6X
          <br />
          Memory Bus: 192 bit
          <br />
          Card Bus: PCI-E 4.0
          <br />
          Digital max resolution: 7680x4320
          <br />
          Multi-view: 4<br />
          Card size: L=300 W=130 H=57.6 mm
          <br />
          PCB Form: ATX
          <br />
          DirectX: 12 Ultimate
          <br />
          OpenGL: 4.6
          <br />
          Power Connectors: 16 pin*1
          <br />
          Output: DisplayPort 1.4a *3
          <br />
          HDMI 2.1a *1
        </p>
      </div>
    ),
    preco: "R$4.899,00",
    imageSrc: P4070
  },
  // Produto ID 4 - Processador
  {
    id: 4,
    name: "Intel Core i7-13700K",
    description: (
      <div>
        <p>
          Marca: Intel <br />
          Modelo: BX8071513700K <br />
          Soquete: LGA 1700 <br />
          Frequência de base P-core: 3.4 GHz <br />
          Frequência de base E-core: 2.5 GHz <br />
          Tamanho do Smart Cache Intel (L3): 30MB <br />
          Total Cache L2: 24MB <br />
          Núcleos de processamento (P-cores + E-cores): 16 (8P+8E) <br />
          Threads do Processador: 24 <br />
          Velocidade máxima da memória: DDR5 5600 MT/s | DDR4 3200 MT/s <br />
          Frequência da Tecnologia Intel Turbo Boost Max 3.0: Até 5.4 Ghz <br />
          Frequência P-core Max Turbo: Até 5.3 Ghz <br />
          Frequência E-core Max Turbo: Até 4.2 Ghz <br />
          Linhas de CPU PCIe: 20 <br />
          Desbloqueado: Sim <br />
          Compatabilidade do Chipset: Chipset Intel Série 700 | Chipset Intel
          Série 600 <br />
          Gráficos do Processador: Intel® UHD Graphics 770 <br />
          Canais de Memória: 2 <br />
          Capacidade Máxima de Memória: 128GB <br />
          Potência Base do Processador: 125W <br />
          Potência Turbo Máxima: 253W <br />
          Confiabilidade, Disponibilidade, & Serviços: ECC <br />
          Intel SIPP3: Sim <br />
          Intel vPro Technology4: Sim
        </p>
      </div>
    ),
    preco: "2.648,99",
    imageSrc: i7
  },
  // Produto ID 5 - Placa de Vídeo
  {
    id: 5,
    name: "Placa Mãe Asus TUF Gaming B550M-Plus",
    description: (
      <div>
        <p>
          Marca: Asus <br />
          Modelo: 90MB14A0-C1BAY0 <br />
          Processador: Processadores AMD Socket AM4 AMD Ryzen de 3ª Geração{" "}
          <br />
          Chipset: AMD B550 <br />
          Memória: <br />
          - Memória 4 x DIMM, máximo de 128GB , DDR4
          <br />
          - Arquitetura de memória: Dual Channel <br />
          - Suporta Intel Extreme Memory Profile (XMP) <br />
          - OptiMem <br />
          - * 10th Gen Intel Core i9/i7 CPUs support 2933/2800/2666/2400/2133
          natively, Refer to www.asus.com for the Memory QVL (Qualified Vendors
          Lists). <br />
          Slots de Expansão: <br />
          - Processador AMD Ryzen de 3ª Geração <br />
          - 1 x PCIe 4.0 x16 (modo x16) <br />
          - AMD B550 Chipset <br />
          - 1 x PCIe 3.0 x16 (modo x4) <br />
          - 1 x PCIe 3.0 x1 <br />
          - * Support PCIe bifurcation for RAID on CPU function. <br />
          Multi-GPU SLI/Crossfire: <br />
          - Suporta Tecnologia AMD 2-Way CrossFireX <br />
          Armazenamento: <br />
          - Total supports 2 x M.2 slots and 4 x SATA 6Gb/s ports <br />
          - Processador AMD Ryzen de 3ª Geração : <br />
          - 1 x M.2 Socket 3, with M Key, Type 2242/2260/2280 (PCIE 4.0 x4 and
          SATA modes) storage devices support <br />
          - AMD B550 Chipset : <br />
          - 1 x M.2 Socket 3, with M Key, Type 2242/2260/2280/22110(PCIE 3.0 x4
          and SATA modes) storage devices support <br />
          - 4 x Porta(s) SATA 6Gb/s. <br />
        </p>
      </div>
    ),
    preco: "939,00",
    imageSrc: B550M
  },
  // Produto ID 6 - Placa de Vídeo
  {
    id: 6,
    name: "Placa De Vídeo Gigabyte AMD Radeon RX 7600",
    description: (
      <div>
        <p>
          Marca: Gigabyte <br />
          Modelo: GV-R76GAMING OC-8GD <br />
          Core Clock: <br />
          - Boost Clock* : up to 2755 MHz (Reference card: 2655 MHz) <br />
          - Game Clock* : up to 2355 MHz (Reference card: 2250 MHz) <br />
          Stream Processors: 2048 <br />
          Memory Clock: 18 Gbps <br />
          Memory Size: 8 GB <br />
          Memory Type: GDDR6 <br />
          Memory Bus: 128 bit <br />
          Card Bus: PCI-E 4.0 <br />
          Digital max resolution: 7680x4320 <br />
          Multi-view: 4 <br />
          Card size: L=282 W=115 H=50 mm <br />
          PCB Form: ATX <br />
          DirectX: 12 Ultimate <br />
          OpenGL: 4.6 <br />
          Power Connectors: 8 pin*1 <br />
          Output: <br />
          - DisplayPort 1.4a *2 <br />- HDMI 2.1a *2
        </p>
      </div>
    ),
    preco: "1.759,00",
    imageSrc: RX7600
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const productDetails = products.find(
    (produto) => produto.id === parseInt(productId, 10)
  );

  if (!productDetails) {
    return (
      <div>
        Produto não encontrado.
        <Link to="/" className="voltar-home">
          Voltar para a Página Inicial
        </Link>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuy = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <h2 className="product-name">{productDetails.name}</h2>
        <img
          src={productDetails.imageSrc}
          alt={productDetails.name}
          className="product-image"
        />
        <p className="product-description">{productDetails.description}</p>
        <p className="product-price">Preço: R$ {productDetails.preco}</p>
        <button onClick={handleBuy} className="comprar-button">
          Comprar
        </button>
      </div>
      <div className="button-container">
        <button onClick={handleGoBack} className="voltar-anterior">
          Voltar à Página Anterior
        </button>
        <Link to="/" className="voltar-home">
          Voltar para a Página Inicial
        </Link>
      </div>
      {isModalOpen && <Cartao onClose={handleCloseModal} />}
    </div>
  );
};

export default ProductDetail;
