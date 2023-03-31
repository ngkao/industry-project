import React, { useState } from "react";
import BoxModal from "../../componenets/BoxModal/BoxModal";


export default function HomePage() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        {showModal && (
          <BoxModal pages={10} onClose={handleCloseModal} />
        )}
      </div>
    );
}
