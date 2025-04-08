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

function App() {
  const [money, setMoney] = useState({ balance: 5000, expenses: 1200 });
  const [transactionData, setTransactionData] = useState(dummyData);
  const initialRender = useRef(true);

  useEffect(() => {
    const data = localStorage.getItem("alldata");
    if (data) {
      const { money, transactionData } = JSON.parse(data);
      setMoney(money);
      setTransactionData(transactionData);
    }
  }, []);

  useEffect(() => {
    if (!initialRender.current) localStorage.setItem("alldata", JSON.stringify({ money, transactionData }));
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
