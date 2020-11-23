import React, {useState, useMemo, useEffect} from 'react';

const complexCompute = (num) => {
  console.log('computing starts at', new Date(Date.now()))
  let i= 0;
  while (i < 99999999) {
    i++;
  }
  console.log('computing ends', new Date(Date.now()))
  return num * 2;
}

const Memo = () => {
  const [result, setResult] =  useState(0);
  const [colored, setColored] = useState(false);

  //  кэшируем объект стиля чтобы при рендере компонента каждый раз не создавался новый объект
  const style = useMemo(() => ({
    color: colored? 'red': 'black',
  }), [colored])
  // useMemo to render only result state instead of the whole component
  const computed = useMemo(() => complexCompute(result), [result])

  useEffect(() => {
    console.log('Style changed');
  }, [colored]);


  return (
    <div>
      <p style={style}>Use Memo</p>
      <div className="btn-container">
        <button className="btn" onClick={() => setResult(result + 1)}>➕</button>
        <button className="btn" onClick={() => setResult(result - 1)}>➖</button>
        <button className="btn" onClick={() => setColored(!colored)}>🔄</button>
      </div>
      <p>{computed}</p>
    </div>
    
  )
}

export default Memo;