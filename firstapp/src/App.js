import logo from './logo.svg';
import './App.css';

const data = [
  {
    id:"2",
    title: "Lemon Ice Cream",
    description: "Mind blowing test",
    image: "https://picsum.photos/200/300/?random",
    prince: "$4.50",
  },
  {
    id:"3",
    title: "Chocoloate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    prince: "$6.00",
  }
]

const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.pricwe,
  }
})

function App() {
  console.log(topDesserts);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Examine hte console outup</h1>ß
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
