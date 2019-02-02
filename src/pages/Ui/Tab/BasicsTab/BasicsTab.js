import React from 'react';

import Successs from "../../Message/Success/Success";

import ErrorNotification from "../../Notification/ErrorNotification/ErrorNotification";

import Loading from "../../Loading/Loading";

// import { Messages} from "utils/MessageUtlis";

import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

class BasicsTab extends React.Component {

  changeCallback = (value) => {
    console.log(value);
    
    // Messages("success",`这是点击了第${value}个模版`,2)
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.changeCallback}>
          <TabPane tab="Tab 1" key="1">
            <Successs/>
          </TabPane>
          <TabPane tab="Tab 2" disabled key="2">
            <ErrorNotification/>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <Loading/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default BasicsTab;
