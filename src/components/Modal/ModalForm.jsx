import { useContext, useEffect, useState } from "react";
import { MoneyContext, TransactionsContext } from "../../Contexts/AllContexts";
import "./Modal.css";
import FormButtons from "../FormButtons/FormButtons";

function ModalForm({ toggleModal, formType, existingData }) {
  const [money, setMoney] = useContext(MoneyContext);
  const [transactionData, setTransactionData] = useContext(TransactionsContext);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    date: new Date().toISOString().split("T")[0],
    category: "",
  });

  const [balanceFormData, setBalanceFormData] = useState({ income: "" });

  useEffect(() => {
    if (existingData) updateForm();
  }, []);

  const updateForm = () => {
    const { title, date, price, category } = existingData;
    setFormData({
      title: title,
      price: price,
      date: date,
      category: category,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === "Add Balance") {
      setMoney({
        ...money,
        balance: money.balance + Number(balanceFormData.income),
      });
    } else if (formType === "Add Expense") {
      let newBalance = money.balance - Number(formData.price);
      let newExpense = money.expenses + Number(formData.price);

      if (newBalance < 0) {
        return alert("Out of Balance");
      }
      let newId = new Date() / 1;
      let newTransaction = { ...formData, id: newId };
      setMoney({ balance: newBalance, expenses: newExpense });
      setTransactionData([...transactionData, newTransaction]);
    } else if (formType === "Edit Expense") {
      let newBalance =
        money.balance + Number(existingData.price) - Number(formData.price);
      let newExpense =
        money.expenses - Number(existingData.price) + Number(formData.price);
      if (newBalance < 0) {
        return alert("Out of Balance");
      }
      setMoney({ balance: newBalance, expenses: newExpense });

      let currentIdx = transactionData.findIndex(
        (transaction) => transaction.id === existingData.id
      );
      transactionData[currentIdx] = { ...formData, id: existingData.id };
      setTransactionData([...transactionData]);
    }
    toggleModal();
  };

  const expenseAndEditInput = () => {
    return (
      <div className="expenseForm">
        <input
          required
          className="formInput"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          type="text"
          name="title"
          autoFocus
        />

        <input
          required
          className="formInput"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          name="price"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Select Category"
          className="formInput"
        >
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <input
          required
          className="formInput"
          value={formData.date}
          onChange={handleChange}
          placeholder="dd/mm/yyyy"
          type="date"
          name="date"
        />
      </div>
    );
  };

  const incomeInputs = () => {
    return (
      <div className="incomeForm">
        <input
          required
          name="income"
          className="formInput"
          value={balanceFormData.income}
          onChange={(e) => setBalanceFormData({ income: e.target.value })}
          placeholder="Income Amount"
          type="number"
          autoFocus
        />
      </div>
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      {formType == "Add Balance" ? incomeInputs() : expenseAndEditInput()};
      <FormButtons text={formType} toggleModal={toggleModal} />
    </form>
  );
}

export default ModalForm;
