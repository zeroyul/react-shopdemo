/*
* @Author: zeroyul
* @Date:   2018-08-23 17:57:04
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-27 13:58:32
*/

import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCar,removeCar} from '../../../store/BuyCarStore.js'
import BuyFooterComponent from '../../../components/BuyFooter/index.js'


//装饰器模式
@connect(
    state => ({num:state.shopNum,auth:state.auth}),
    {addCar,removeCar}
 )



class BuyFooter extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <BuyFooterComponent addHandler={this.addHandler.bind(this)} purchaseHandler={this.purchaseHandler.bind(this)} />
            </div>
        )
    }

    addHandler(){
        const loginFlag = this.loginCheck()

        //未登录跳登录
        if (!loginFlag) {
            return
        }
        this.props.addCar();

    }

    purchaseHandler(){
        const loginFlag = this.loginCheck()

        //未登录跳登录
        if (!loginFlag) {
            return
        }
        //登录后就直接跳订单确认页面
        this.props.history.push(`/App/About/${this.props.productId}`)
    }

    loginCheck(){

        if(!this.props.auth.isAuth){
            //跳登录
            this.props.history.push({
                            pathname:"/login",
                            state:{from:this.props.location.pathname}
                        })
            return false
        }
        return true
    }


}

export default withRouter(BuyFooter);