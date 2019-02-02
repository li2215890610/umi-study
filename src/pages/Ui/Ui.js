import React from 'react';

class UI extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {    
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default  UI;
