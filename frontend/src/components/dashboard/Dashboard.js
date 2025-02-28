import Transactions from "./Transactions";
import TransactionForm from "./TransactionForm";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <TransactionForm />
      <Transactions />
    </div>
  );
};

export default Dashboard;
