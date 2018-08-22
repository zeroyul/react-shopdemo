/*
* @Author: zeroyul
* @Date:   2018-08-15 13:52:20
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-15 16:41:25
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
        return (
            <li className="theme-shop-item">
                {/**/}

                <Link to={`${match.url}/About/333`}>
                    <img onClick={this.clickHandler} src="http://t.image.air-cooking.com/product/list/20170518/591d5fc20e42b.jpg" alt=""/>
                </Link>
                <div className="name">丽芝士雅嘉奶酪味玉米棒 160g*2袋 </div>
                <div className="shop-handle"><span className="price">￥10.8</span><i className="iconfont icon-icon-gouwuche"></i></div>
            </li>
        )
    }

    clickHandler(e){
        console.log('Shop click');

    }
}

export default Item;