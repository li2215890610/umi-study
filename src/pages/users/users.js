
import React, { Component} from 'react';
import { connect } from 'dva';
import styles from './users.css';


class users extends Component {

  
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = ()=>{
    console.log("加载了")
    this.props.dispatch({
      type:"users/getUsersList",
      payload:{

      }
    })
  }

  render() {

    return (
      <div>
          Users
      </div>
    );
  }

  //在渲染前调用
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  //在第一次渲染后调用
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }
  //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 可以在你确认不需要更新组件时使用。
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  // 在组件完成更新后立即调用。在初始化时不会被调用。
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  //在组件从 DOM 中移除的时候立刻被调用。
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  //绑定方法
  onClicks = (e, num) => {
    console.log(e, num);
  }

}


export default connect(({ }) => {
  return {
    
  }
})(users);


