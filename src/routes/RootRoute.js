import React from 'react';
import router from 'umi/router';

import PageLoading from "../components/PageLoading/index"

class RootRoute extends React.Component{

  componentDidMount = ()=>{
    // debugger
    router.push('/login');
  }
  render (){
    return (
      <div>
          <PageLoading />
      </div>
    )
  }
}
export default RootRoute