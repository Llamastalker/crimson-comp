import { useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const modalContent = isOpen ? (
    createPortal(
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(205, 198, 255, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        fontFamily: 'Times New Roman'
      }}>
        <div style={{
          width: '20rem',
          height: '20rem',
          background: 'white',
          padding: '20px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontWeight: 'bold' }}>
            Surprise. Here's the modal!
            And a picture of the Lampoon's Ibis in Russia. :)
          </p>
          <img src = "src/components/lampoon-ibis.jpeg" width = "100px" height = "100px" alt = "Lampoon's ibis sent to Russia"></img>
          <button onClick={handleClose} style={{
            width: "15rem",
            fontSize: '18px',
            border: '1px solid #555',
            borderRadius: '5px',
            padding: '5px',
            fontFamily: 'Times New Roman'
          }}>
            Close Modal
          </button>
        </div>
      </div>,
      modalRoot
    )
  ) : null;

  return (
    <>
      <center><button onClick={handleOpen} style={{
        fontSize: '18px',
        fontFamily: 'Times New Roman',
        width: '200px',
        border: '1px solid #555',
        borderRadius: '5px',
        padding: '5px',
        marginTop: '10px',
        fontWeight: 'bold'
      }}>
        Click me for Modal!
      </button></center>
      {modalContent}
    </>
  );
}
