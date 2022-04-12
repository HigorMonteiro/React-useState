import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({
    usernma: 'Higor',
    age: '28',
  });
  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, job: 'FullStack developer' });
  }

  return (
    <div className="container">
      <div className="item">
        <b>Username:</b> {dados.usernma}
      </div>
      <div className="item">
        <b>Age:</b> {dados.age}
      </div>

      <div className="item">
        <b>Job:</b>
        {ativo ? dados.job : 'Inativo'}
      </div>
      <div className="item">
        <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      </div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
