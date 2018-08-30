/*
* @Author: zeroyul
* @Date:   2018-08-24 11:21:53
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-27 13:57:50
*/


import React from 'react'
import './style.less'



class BuyFooter extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="product-footer">
                <div className="part">
                    其他功能按钮
                </div>
                <div className="part">
                    <button className="add-car" onClick={this.props.addHandler}>加入购物车</button>
                    <button className="purchase" onClick={this.props.purchaseHandler}>直接购买</button>
                </div>

            </div>
        )
    }
}

export default  BuyFooter;