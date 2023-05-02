import { useEffect, useState } from 'react';
export default function OtherColorSwap() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
  //use this width to see how even layout changes don't trigger parent rerenders
  const [width, setWidth] = useState('100px');
  //create a hook that changes the background color of a div every second
  useEffect(() => {
    //adjusting state in an interval function
    //and clearing that interval in cleanup
    const interval = setInterval(() => {
      setColor((prev) => (prev === 'red' ? 'blue' : 'red'));
      setCount((prev) => prev + 1);
      console.log('interval function');
      setWidth((prev) => (prev === '100px' ? '150px' : '100px'));
    }, 1000);
    //cleanup function runs every render
    return () => {
      console.log('red-blue render');
      console.log('count red blue', count);
      console.log(color);
      console.log(interval);
      console.log(' ');
      clearInterval(interval);
    };
  });
  function addCountClick() {
    setCount((prev) => prev + 1);
    setColor((prev) => (prev === 'green' ? 'yellow' : 'green'));
  }
  return (
    <div className="box-container">
      <div className="test-box" style={{ backgroundColor: color }}>
        <button onClick={addCountClick}>Add to Count</button>
      </div>
      <p className="count-text">{count}</p>
    </div>
  );
}
