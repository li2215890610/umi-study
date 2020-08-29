import React from 'react';
// import { FusionContext } from './context';
import Layout from './index';

const Provider: React.FC<{}> = props => (
  // <FusionContext.Provider
  //   value={{
  //     nolayout: false,
  //   }}
  // >
  // <Layout>{props.children}</Layout>
  // </FusionContext.Provider>
  <div>{props.children}</div>
);

export default Provider;
