import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter -1 );

  return (
    <div className="App">
      <button className="btn" onClick={increment}>Нажми меня!</button>
      <button className="btn" onClick={decrement}>Нажми меня!</button>
      <p>Пользователи: {counter}</p>
    </div>
  );
}

export default App;
