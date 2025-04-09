import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { MoneyContext, TransactionsContext } from "../../Contexts/AllContexts";
import React, { useContext, useState } from "react";
import deleteIcon from "../../assets/closeIcon.svg";
import editIcon from "../../assets/editIcon.svg";
import foodIcon from "../../assets/food.svg";
import movieIcon from "../../assets/movie.svg";
import travelIcon from "../../assets/travel.svg";
import "./TransactionCard.css";

function TransactionCard({ title, date, price, category, id }) {
  const [money, setMoney] = useContext(MoneyContext);
  const [transactionData, setTransactionData] = useContext(TransactionsContext);

  const [modalOn, setModalOn] = useState(false);
  const toggleModal = () => setModalOn(!modalOn);

  const deleteTransaction = () => {
    const updated = transactionData.filter((item) => item.id !== id);
    const newBalance = money.balance + Number(price);
    const newExpense = money.expenses - Number(price);
    setMoney({ balance: newBalance, expenses: newExpense });
    setTransactionData([...updated]);
  };

  const selectIcon = () => {
    if (category === "food") return foodIcon;
    if (category === "entertainment") return movieIcon;
    if (category === "travel") return travelIcon;
  };

  return (
    <div className="transactionCard">
      <div className="innerCard">
        <div className="transactionIcon">
          <img src={selectIcon()} />
        </div>
        <div className="cardInfo">
          <h5>{title}</h5>
          <p>{date}</p>
        </div>
      </div>
      <div className="innerCard">
        <p className="cardPrice">{price}</p>
        <Button
          icon={deleteIcon}
          buttonSize="smallButton"
          background="backgroundRed"
          clickFunction={deleteTransaction}
        />
        <Button
          icon={editIcon}
          buttonSize="smallButton"
          background="backgroundOrange"
          clickFunction={toggleModal}
        />
      </div>
      {modalOn ? (
        <Modal
          toggleModal={toggleModal}
          text="Edit Expense"
          existingData={{ title, date, price, category, id }}
        />
      ) : null}
    </div>
  );
}

export default TransactionCard;
