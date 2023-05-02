import { useEffect, useState } from 'react';
export default function NormalColorSwap() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');
  let interval: number;
  //create a hook that changes the background color of a div every second
  useEffect(() => {
    interval = setTimeout(() => {
      setCount((prev) => prev + 1);
      setColor((prev) => (prev === 'black' ? 'white' : 'black'));
    }, 1000);
    return () => {
      console.log('black-white-render');
      clearInterval(interval);
    };
  });
  function cancelIntervalClick() {
    clearTimeout(interval);
  }
  return (
    <div className="box-container">
      <div className="test-box" style={{ backgroundColor: color }}>
        <button onClick={cancelIntervalClick}>Cancel Interval</button>
      </div>
      <p className="count-text">{count}</p>
    </div>
  );
}
