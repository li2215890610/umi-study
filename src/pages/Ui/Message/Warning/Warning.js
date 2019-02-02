import React from 'react'

import { Button, message } from 'antd'

class Warning extends React.Component {

    showMessage = ()=>{
        message.warning("Warning");
    }

    render(){
        return (
            <div>
              <Button type="primary" onClick={this.showMessage}>Warning</Button>
            </div>
        );
    }
}

export default Warning