import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter -1 );

  return (
    <div className="App">
      <div className="btn-container">
        <button className="btn" onClick={increment}>Up</button>
        <button className="btn" onClick={decrement}>Down</button>
      </div>
      <p>Пользователи: {counter}</p>
    </div>
  );
}

export default App;
