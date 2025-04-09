import React from "react";
import "./AppBody.css";
import Transactions from "../Transactions/Transactions";
import TopExpenses from "../TopExpenses/TopExpenses";

function AppBody() {
  return (
    <div className="container">
      <div className="box">
        <Transactions />
      </div>
      <div className="box">
        <TopExpenses />
      </div>
    </div>
  );
}

export default AppBody;
