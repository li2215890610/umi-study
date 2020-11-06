import React, { useState, useEffect, FC } from 'react';

const Hooks: FC<{}> = () => {
  console.log('进来了');

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log('进来了 setTimeout');
    }, 3 * 1000);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
};

export default Hooks;
