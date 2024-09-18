import React from "react";
import './Card.css'; // Archivo CSS para el estilo
import './App.css'; // Archivo CSS para el estilo


const Card = ({ children }) => {
  return (
    <div className="card">
      {children}  {/* Renderiza lo que esté entre las etiquetas <Card></Card> */}
    </div>
  );
};

export default Card;
