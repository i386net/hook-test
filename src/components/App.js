import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('users');
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const renderCounter = useRef(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter -1 );
  const visibilityHandler = () => setVisible(!visible);
  const mouseMoveHandler = (e) => setPosition({
    x: e.clientX,
    y: e.clientY,
  });

  useEffect(() => {
    console.log('Rendering  data');
    if (visible) {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json))
    }
  }, [visible, type]);

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [position]);

  useEffect(() => {
    renderCounter.current++;
  },);

  const dataList = data.slice(0, 10).map(d => <li key={d.id}>{JSON.stringify(d)}</li>)

  return (
    <div className="App">
      <div className="btn-container">
        <button className="btn" onClick={increment}>Up</button>
        <button className="btn" onClick={decrement}>Down</button>
      </div>
      <p>Пользователи: {counter}</p>
      <hr className="line"/>
      <p>x: {position.x} y: {position.y}</p>
      <hr className="line"/>
      <div className="brn-container">
        <button className="btn" onClick={visibilityHandler}>Show Data</button>
        <button className="btn" onClick={() => setType('users')}>Users</button>
        <button className="btn" onClick={() => setType('posts')}>Posts</button>
        <button className="btn" onClick={() => setType('todos')}>Todos</button>
      </div>
      <p>Current type: {type}</p>
      <ul className={visible? 'on': 'off'}>
        {dataList}
      </ul>
      <hr className="line"/>
      <p>Current render count: {renderCounter.current}</p>
    </div>
  );
}

export default App;
