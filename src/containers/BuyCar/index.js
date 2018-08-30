/*
* @Author: zeroyul
* @Date:   2018-08-07 14:49:11
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-27 14:33:23
*/

import React from 'react'

import BuyHeader from './subpage/BuyHeader.js'
import BuyList from './subpage/BuyList.js'
import BuyCarHandle from './subpage/BuyCarHandle.js'

class BuyCar extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        return (
            <div>
            <h1>我是购物车</h1>
            <BuyHeader />
            <BuyList />
            <BuyCarHandle />

            </div>
        )
    }
}

export default BuyCar;