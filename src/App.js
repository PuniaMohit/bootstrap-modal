import React, { useState } from 'react';
import Modal from './modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
console.log(showModal)
  return (
    <div className="row">
      <button className="btn btn-default btn-block" onClick={handleShowModal}>Open Modal</button>
      {showModal 
      ? <Modal handleHideModal={handleHideModal} />
      :<></>}
    </div>
  );
};

export default App; 






