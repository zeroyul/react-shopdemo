/*
* @Author: zeroyul
* @Date:   2018-08-23 17:52:51
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-24 11:08:33
*/

import React from 'react'
import {connect} from 'react-redux'



import BuyHeaderComponent from '../../../components/BuyHeader/index.js'

//装饰器模式
@connect(
    state => ({shopNum:state.buycar})
)

class BuyHeader extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <BuyHeaderComponent shopNum={this.props.shopNum} />
        )
    }
}

export default BuyHeader;