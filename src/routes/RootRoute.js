import React from 'react';
import router from 'umi/router';
import { Button } from 'antd';

class RootRoute extends React.Component{

  componentDidMount = ()=>{
    // debugger
    router.push('/login');
  }
  render (){
    return (
      <div>
          cscdcdcd
          <Button>sdsd</Button>
      </div>
    )
  }
}
export default RootRoute