/*
* @Author: zeroyul
* @Date:   2018-08-14 10:46:57
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-21 17:21:32
*/


import React from 'react'
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import './style.less'
import RouterRoot from '../../containers/RouterRoot/index.js'
import {login} from '../../store/AuthStore.js'
@connect(
    state=>({auth:state.auth}),
    {login}
    )

class Mine extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        const match = this.props.match
        console.log(this.props)
        return (
            <div className="mine">
                <h1>我是个人中心页面</h1>
                <div className="head">
                    <div className="headicon">
                        {
                        this.props.auth.isAuth?<img  src="http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIqiadfWrDzvRxImHwsHlxyU27HjooKqyZhR3CjAvT1j6ZWEMhD5DibaAIwo8yPkDpl4BwFQBFf7icsA/132" alt=""/>:<img  src="https://avatar.csdn.net/E/6/E/3_zhengjie0722.jpg" alt=""/>
                        }
                    </div>
                    <div className="name">
                        {
                            this.props.auth.isAuth?<span className="name-load">{this.props.auth.user}</span>
                        :<Link to={{
                            pathname:"/login",
                            state:{from:this.props.location.pathname}
                        }}
                         className="name-load">登录</Link>
                        }

                    </div>

                </div>

                <div className="main-link">
                    <div className="order-link">
                        <div className="all-order">
                        <div> <i className="iconfont icon-icon-wodedingdan"></i> <span>我的订单</span></div>
                        <div className="look-all"> <span>查看全部</span><i className="iconfont icon-icon-jiantou"></i></div>
                        </div>
                        <div className="four-order">
                        <div><Link to="/App/TestIcon">待付款</Link></div>
                        <div><Link to="/App/TestIcon">待发货</Link></div>
                        <div><Link to="/App/TestIcon">待收货</Link></div>
                        <div><Link to="/App/TestIcon">已完成</Link></div>
                        </div>
                    </div>
                    <ul>
                    <li><i className="iconfont icon-icon-dizhiguanli"></i><div>地址管理</div></li>
                    <li><Link to="/App/SetUp"><i className="iconfont icon-icon-shezhi"></i><div>设置</div></Link></li>
                    <li><i className="iconfont icon-icon-guanyuwomen"></i><div>关于我们</div></li>

                    </ul>
                </div>
                <RouterRoot match={match} />

            </div>
        )
    }
}

export default Mine;
