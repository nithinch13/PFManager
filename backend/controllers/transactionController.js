const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  try {
    const { type, amount, category } = req.body;
    const transaction = new Transaction({ user: req.user.id, type, amount, category });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort("-date");
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
