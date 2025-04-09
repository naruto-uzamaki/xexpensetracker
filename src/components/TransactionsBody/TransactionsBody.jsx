import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../Contexts/AllContexts";
import PageNavigateBar from "./PageNavigateBar";
import TransactionCard from "../TransactionCard/TransactionCard";

function TransactionBody() {
  const [transactionData, setTransactionData] = useContext(TransactionsContext);
  const [pages, setPages] = useState({ currentPage: 1, totalPages: 1 });

  useEffect(() => {
    setPages({
      currentPage: 1,
      totalPages: Math.ceil(transactionData.length / 5),
    });
  }, [transactionData]);

  const displayTransactions = () => {
    let renderedList = [];
    if (!transactionData) return renderedList;
    if (transactionData.length === 0) return renderedList;
    let key = 0;

    let srtidx = 5 * (pages.currentPage - 1);
    let endidx = 5 * pages.currentPage - 1;
    for (let i = srtidx; i <= endidx; i++) {
      if (i >= transactionData.length) break;
      const { name, date, price, category, id } = transactionData[i];
      renderedList.push(
        <TransactionCard
          key={`${key++}`}
          id={id}
          name={name}
          price={price}
          category={category}
          date={date}
        />
      );
    }
    return renderedList;
  };

  const updatePage = (direction) => {
    let { currentPage, totalPages } = pages;
    if (direction === "right" && currentPage < totalPages) {
      setPages({ ...pages, currentPage: currentPage + 1 });
    }
    if (direction === "left" && currentPage > 1) {
      setPages({ ...pages, currentPage: currentPage - 1 });
    }
  };

  return (
    <div>
      <div>{displayTransactions()}</div>
      <PageNavigateBar
        key={"pageNavigate"}
        pages={pages}
        updatePage={updatePage}
      />
    </div>
  );
}

export default TransactionBody;
