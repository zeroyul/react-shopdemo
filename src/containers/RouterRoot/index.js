/*
* @Author: zeroyul
* @Date:   2018-08-16 17:06:12
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-16 17:35:32
*/

import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'



class RouterRoot extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const match = this.props.match
        return (
            <nav className="app-nav">
                    <div><NavLink exact activeClassName="selected" to="/App"><i className="iconfont icon-icon_shouye"></i><div>首页</div></NavLink></div>
                    <div><NavLink activeClassName="selected" to="/App/Classify"><i className="iconfont icon-icon_fenlei"></i><div>分类</div></NavLink></div>
                    <div><NavLink activeClassName="selected" to="/App/BuyCar"><i className="iconfont icon-icon_gouwuche-"></i><div>购物车</div></NavLink></div>
                    <div><NavLink activeClassName="selected" to="/App/Mine"><i className="iconfont icon-icon_gerenzhongxin"></i><div>我的</div></NavLink></div>

            </nav>
        )
    }
}

export default RouterRoot;