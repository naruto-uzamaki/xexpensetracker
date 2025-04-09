import AppHead from "./components/AppHead/AppHead";
import AppBody from "./components/AppBody/AppBody";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import { dummyData } from "./dummyTransactions";
import { MoneyContext, TransactionsContext } from "./Contexts/AllContexts";
import Button from "./components/Button/Button";
import FormButtons from "./components/FormButtons/FormButtons";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import TransactionCard from "./components/TransactionCard/TransactionCard";

function App() {
  const [money, setMoney] = useState({ balance: 5000, expenses: 0 });
  const [transactionData, setTransactionData] = useState([]);
  const initialRender = useRef(true);

  useEffect(() => {
    const moneyData = localStorage.getItem("money");
    const expensesData = localStorage.getItem("expenses");
    if (moneyData) {
      setMoney(JSON.parse(moneyData));
    }

    if (expensesData) {
      setTransactionData(JSON.parse(expensesData));
    }
  }, []);

  useEffect(() => {
    if (!initialRender.current) {
      // localStorage.setItem("alldata", JSON.stringify({ money, transactionData }));
      localStorage.setItem("money", JSON.stringify(money));
      localStorage.setItem("expenses", JSON.stringify(transactionData));
    }
    return (() => {
      initialRender.current = false;
    });
  }, [money, transactionData]);

  return (
    <div className="App">
      <MoneyContext.Provider value={[money, setMoney]}>
        <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
          <Navbar />
          <AppHead balance={money.balance} expenses={money.expenses} />
          <AppBody transactionData={transactionData} />
        </TransactionsContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
}

export default App;
