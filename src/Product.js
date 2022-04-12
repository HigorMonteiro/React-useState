import React from 'react';

const Product = ({ dados }) => {
  return (
    <div className="product">
      <h1>{dados.nome}</h1>
      <p> R$ {dados.preco}</p>
      <img
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
        width="500"
        height="600"
      />
    </div>
  );
};

export default Product;
