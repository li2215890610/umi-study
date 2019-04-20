import React from "react";

import { Modal} from 'antd';

import styles from "./Modals.css";

class Modals extends React.Component {

  hideModal = ()=>{
    this.props.hideModal && this.props.hideModal()
  }

  render() {
    
    return (
      <div>
         <Modal
          visible={this.props.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          footer={null}
          width={650}
         >
           <img className={styles['img']} src='http://p0.meituan.net/scarlett/352a9aaf01425d2ca78b388a1dbd0e23217986.png.webp' alt="22" />
         </Modal>
      </div>
    );
  }
}

export default Modals;