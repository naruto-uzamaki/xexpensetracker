import { useState } from "react";
import Button from "../Button/Button";
import "./Card.css";
import Modal from "../Modal/Modal";

function Card({ text, value }) {
  const [modalOn, setModelOn] = useState(false);

  const toggleModal = () => {
    setModelOn(!modalOn);
  };

  return (
    <div className="card">
      <div style={{ fontSize: "1.5rem" }}>
        <span>{text}:</span>
        <span className={text === "Expenses" ? "cardTextRed" : "cardTextGreen"}>
          ₹{value}
        </span>
      </div>

      <Button
        text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
        background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
        buttonSize="largeButton"
        clickFunction={toggleModal}
        buttonType="button"
      />

      {modalOn ? (
        <Modal
          toggleModal={toggleModal}
          text={text === "Expenses" ? "Add Expense" : "Add Balance"}
        />
      ) : null}
    </div>
  );
}

export default Card;
