import { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [formData, setFormData] = useState({ type: "expense", amount: "", category: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <select name="type" onChange={handleChange}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount" onChange={handleChange} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
