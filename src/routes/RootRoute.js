import React from 'react';
import router from 'umi/router';

class RootRoute extends React.Component{

  componentDidMount = ()=>{
    router.push('/login');
  }
  render (){
    return (
      <div>

      </div>
    )
  }
}
export default RootRoute