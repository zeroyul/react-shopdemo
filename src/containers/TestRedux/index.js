/*
* @Author: zeroyul
* @Date:   2018-08-08 17:04:09
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-14 10:13:35
*/

import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from '../../store/storeTest.js';

//装饰器模式
@connect(
  state=>({num:state.counter}),
  {addGun,removeGun,addGunAsync}
)

class Index extends React.Component {

    render() {
        return (
            <div>
                <h1>我是首页</h1>
                <div>
                 <h2>现在有机枪{this.props.num}把</h2>
                 <button onClick={this.props.addGun}>申请武器</button>
                 <button onClick={this.props.removeGun}>上交武器</button>
                 <button onClick={this.props.addGunAsync}>拖延两秒上交武器</button>
                </div>
            </div>

        )
    }
}

export default Index;
