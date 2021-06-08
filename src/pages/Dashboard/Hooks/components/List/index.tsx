import React, { useState } from 'react';

const List: React.FC<{
  count: number;
  onClick: Function;
}> = props => {
  return (
    <div>
      <div
        onClick={() => {
          let count = props.count;
          props.onClick(count++);
        }}
        style={{ width: 300, height: 200, backgroundColor: 'red' }}
      >
        点我
        {props.children}
      </div>
    </div>
  );
};

export default List;
