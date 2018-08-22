/*
* @Author: zeroyul
* @Date:   2018-08-02 11:33:20
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-14 15:12:45
*/

import React, { Component } from 'react';

import './index.less';

class About extends Component {


  render() {
    console.log(this.props)
    return (
      <div className="About">
        我是about
        <div className="test">我是活动页{this.props.match.params.id}</div>

      </div>
    );
  }
}

export default About;
