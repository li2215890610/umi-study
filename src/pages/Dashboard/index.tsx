import React from 'react';

const Dashboard: React.FC<{}> = props => {
  return (
    <>
      Dashboard
      <div>{props.children}</div>
    </>
  );
};

export default Dashboard;
