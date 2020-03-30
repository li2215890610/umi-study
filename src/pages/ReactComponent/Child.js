
import React, { Component } from 'react';


const Child = (props)=>{

  return (
    <div style={{marginTop: 100}}>
      我是子组件
      `
      {props.value}
      `
      <button onClick={()=>{
        props.onClick && props.onClick(props.value ? props.value:"父组件收到值了")
      }}>点我吧</button>
    </div>
  );
}

// class Child extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }

//   render() {
//     console.log("我执行render了")
//     return (
//       <div style={{marginTop: 100}}>
//         我是子组件
//         `
//         {this.props.value}
//         `
//         <button onClick={()=>{
//           this.props.onClick && this.props.onClick(this.props.value ? this.props.value:"父组件收到值了")
//         }}>点我吧</button>
//       </div>
//     );
//   }

// }


export default Child;
