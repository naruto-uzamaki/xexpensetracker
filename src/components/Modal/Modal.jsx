import "./Modal.css";
import ModalForm from "./ModalForm";

function Modal({ text, toggleModal, existingData }) {
  return (
    <div className="Modal" onClick={toggleModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="modalHead">{text}</div>
        <ModalForm
          existingData={existingData}
          toggleModal={toggleModal}
          formType={text}
        />
      </div>
    </div>
  );
}

export default Modal;
