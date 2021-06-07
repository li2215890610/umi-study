// import React,{ FC } from "React";

// const List: React.FC<{
//   count: number
// }> = (props) => {
//   console.log('进来了');

//   // const [count, setCount] = useState(props.count);

//   return (
//     <div>
//       <h1>{props.count}</h1>
//       {/* <button onClick={() => setCount(count + 1)}>点我</button> */}
//     </div>
//   );
// };

// export default List;

import React, { useState } from 'react';

const List: React.FC<{
  count: number;
}> = props => {
  const [count, setCount] = useState(props.count);

  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
};

export default List;
