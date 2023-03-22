import './App.css';

function App() {
  return (
    <div>
      <MyName />
      <ul className="p">
        <li class="li">JS</li>
        <li class="li">Html</li>
        <li class="li">Name: <input min="0" type="number"></input></li>
      </ul>
    </div>
  );
}

const MyName = () => {
  return (
    <div>
      <p className="p">Hello world!</p>
      <p className="p">My name Andrew</p>
    </div>
  );
}

export default App;
