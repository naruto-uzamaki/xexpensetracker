import React from "react";
import TransactionBody from "../TransactionsBody/TransactionsBody";

function Transactions() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Recent Transactions</h2>
      <TransactionBody />
    </div>
  );
}

export default Transactions;
