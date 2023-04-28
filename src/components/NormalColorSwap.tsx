import { useEffect, useState } from 'react';
export default function NormalColorSwap() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');
  //create a hook that changes the background color of a div every second
  useEffect(() => {
    const interval = setTimeout(() => {
      setColor((prev) => (prev === 'black' ? 'white' : 'black'));
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log('ended');
      clearInterval(interval);
    };
  });
  return (
    <>
      <div className="test-box" style={{ backgroundColor: color }}></div>
      <p>{count}</p>
    </>
  );
}
