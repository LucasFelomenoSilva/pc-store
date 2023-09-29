import React, { useState } from "react";
import "../styles/Cartao.css";

const Cartao = ({ onClose }) => {
  const [nomeTitular, setNomeTitular] = useState("");
  const [cpf, setCpf] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvv, setCvv] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirmar = () => {
    alert("Confirmado");
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Preencha os dados do seu cartão de crédito</h2>
        <input
          type="text"
          placeholder="Nome do Titular"
          value={nomeTitular}
          onChange={(e) => setNomeTitular(e.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número do Cartão"
          value={numeroCartao}
          onChange={(e) => setNumeroCartao(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <input
          type="text"
          placeholder="Data de Validade (MM/AA)"
          value={dataValidade}
          onChange={(e) => setDataValidade(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleConfirmar} className="confirmar-button">
          Confirmar
        </button>
        <button onClick={onClose} className="fechar-button">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Cartao;
