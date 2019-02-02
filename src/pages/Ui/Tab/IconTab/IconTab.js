import React from 'react';

import Success from "../../Message/Success/Success";

import ErrorNotification from "../../Notification/ErrorNotification/ErrorNotification";

import Loading from "../../Loading/Loading";

// import { Messages} from "utils/MessageUtlis";

import { Tabs, Icon, Radio } from "antd";

const TabPane = Tabs.TabPane;

class IconTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      size:"small"
    }
  }
  changeCallback = (value) => {
    console.log(value);
    
    // Messages("success",`这是点击了第${value}个模版`,2)
  }

  onChange = (e) =>{
    this.setState({ size: e.target.value });

  }

  render() {

    let { size} = this.state;

    let Tab1 = <span><Icon type="apple" />Tab 1</span>
    let Tab2 = <span><Icon type="android" />Tab 2</span>
    let Tab3 = <span><Icon type="plus" />Tab 3</span>

    return (
      <div>
        <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>

        <Tabs defaultActiveKey="1" size={size} onChange={this.changeCallback}>
          <TabPane tab={Tab1} key="1">
            <Success/>
          </TabPane>
          <TabPane tab={Tab2}  key="2">
            <ErrorNotification/>
          </TabPane>
          <TabPane tab={Tab3} key="3">
            <Loading/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default IconTab;
