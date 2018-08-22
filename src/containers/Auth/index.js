/*
* @Author: zeroyul
* @Date:   2018-08-10 11:28:19
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-21 17:28:32
*/

import React from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../store/AuthStore.js'

@connect(
    state=>state.auth,
    {login}
)

class Auth extends React.Component {

    render() {

        //来源记录
        let from;
        if(this.props.location.state != null){

            from = this.props.location.state.from
        }
        const urlTo = from ||'/App';

        console.log(urlTo)
        return (


            <div>

                {this.props.isAuth?<Redirect to={urlTo} />:null}
                <p>你没有权限，需要登录才能看</p>
                <button onClick={this.props.login}>登录</button>
            </div>
        )


    }
}

export default Auth;