/*
* @Author: zeroyul
* @Date:   2018-08-24 10:31:46
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-24 15:22:51
*/

import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'


class BuyHeader extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="product-header clear">
                <div className="float-left ">
                    <Link to="/App/TestIcon"><i className="iconfont icon-icon-jiantouback"></i></Link>
                </div>

                <div className="float-right head-right">
                <Link to="/App/BuyCar"><i className="iconfont icon-icon-gouwuche"></i><span className="goodsNum">{this.props.shopNum}</span></Link>
                </div>

            </div>
        )
    }
}

export default BuyHeader;