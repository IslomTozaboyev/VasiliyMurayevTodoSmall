import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    padding-top: 5rem;
  }

  .modalBody {
    padding: 2rem;
    width: 400px;
    border-radius: 5px;
    background: #fff;
    height: 200px;
  }
`;

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <ModalWrapper>
      <React.Fragment>
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-outline-success my-3"
        >
          Open Modal
        </button>

        {open && (
          <div className="modal">
            <div className="modalBody">
              <h1>Modal Title</h1>
              <p>I am awesome Modal</p>
              <button
                onClick={() => setOpen(!open)}
                className="btn btn-outline-danger"
              >
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    </ModalWrapper>
  );
};

export default Modal;
