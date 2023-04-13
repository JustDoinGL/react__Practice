import UseState from "./Hooks/UseState";

function App() {
  const userInput = UseState()
  const userPAs = UseState()

  return (
    <div className="App">
      <input
        placeholder="name"
        {...userInput}
      />
      <input
        type="password"
        placeholder="password"
      {...userPAs}
      />
      <button onClick={() => {console.log(userPAs.value, userInput.value)}}>Получить</button>
    </div>
  );
}

export default App;
