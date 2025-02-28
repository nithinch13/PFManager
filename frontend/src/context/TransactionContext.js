import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:5000/api/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setTransactions(res.data))
      .catch(err => console.log(err));
    }
  }, [token]);

  const addTransaction = async (data) => {
    const res = await axios.post("http://localhost:5000/api/transactions", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTransactions([...transactions, res.data]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, TransactionContext };
