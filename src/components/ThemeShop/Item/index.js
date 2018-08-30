/*
* @Author: zeroyul
* @Date:   2018-08-15 13:52:20
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 16:26:03
*/

import React from 'react'
import './style.less'
import {Link} from 'react-router-dom'


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler =this.clickHandler.bind(this);
    }
    render() {
        const match = this.props.match;
        const data =this.props.data
        return (
            <li className="theme-shop-item">
                {/**/}

                <Link to={`${match.url}/Product/${data.productid}`}>
                    <img onClick={this.clickHandler} src={data.coverpicpath} alt=""/>
                </Link>
                <div className="name">{data.productname} </div>
                <div className="shop-handle"><span className="price">￥{data.saleprice}</span><i className="iconfont icon-icon-gouwuche"></i></div>
            </li>
        )
    }

    clickHandler(e){
        console.log('Shop click');

    }
}

export default Item;