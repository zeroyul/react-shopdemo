/*
* @Author: zeroyul
* @Date:   2018-08-16 15:52:17
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-17 09:41:42
*/

import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../../store/AuthStore.js'
import {Redirect} from 'react-router-dom'

import './style.less'
@connect(
    state=>state.auth,
    {logout}
    )
class SetUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const setup = (
            <div className="set-up">
                <h1>设置登出页面</h1>
                <button className="logout" onClick={this.props.logout}>退出登录</button>
            </div>
        )
        const redirectToLogin = <Redirect to="/login"/>

        return this.props.isAuth?setup:redirectToLogin
    }
}

export default SetUp;