import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t._id}>{t.category}: ${t.amount} ({t.type})</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
