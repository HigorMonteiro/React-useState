import React from 'react';
import Product from './Product';
import LoadingSpinner from './LoadingSpinner';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
        <button onClick={handleClick}>notebook</button>
      </div>
      {!loading && dados && <Product className="item" dados={dados} />}
      {loading && <p>Loading ....</p>}
      {loading && <LoadingSpinner />}
    </>
  );
};

export default App;
