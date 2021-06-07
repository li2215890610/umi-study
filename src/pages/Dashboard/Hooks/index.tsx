import React, { useState, useEffect, FC } from 'react';
import List from './components/List';

const Hooks: FC<{}> = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('初始化加载');
    return () => {
      console.log('销毁阶段');
    };
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    console.log('进来了 setTimeout');
    // }, 3 * 1000);
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>点我</button>
      <List
        count={count}
        onClick={(num: number) => {
          console.log(num, '____num___');
          setCount(num + 1);
        }}
      />
    </div>
  );
};

export default Hooks;
