import './App.css';
import Header from './components/Header';
import Forms from './components/Forms';
import TransactionList from './components/TransactionList.js';

const transactions = [
  {
      date: "2019-12-01",
      description : "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000
  },
  {
      date: "2019-12-01",
      description : "Quinoa bowl, WholeFoods",
      category: "Food",
      amount: -10.55
  },
  {
      date: "2019-12-01",
      description : "Quinoa bowl, WholeFoods",
      category: "Food",
      amount: -10.55
  },
  {
      date: "2019-12-04",
      description : "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: -24.99
  }
]

console.log(transactions)

function App() {
  return (
    <div className="App">
      <Header />
      <Forms />
      <TransactionList transactions={transactions}/>
    </div>
  );
}

export default App;
