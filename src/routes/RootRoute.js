import React from 'react';

import router from 'umi/router';

import PageLoading from "../components/PageLoading/index"

class RootRoute extends React.Component{

  componentWillMount = ()=>{
    //  在这里判断是否是登录状态
    router.push('/home');
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