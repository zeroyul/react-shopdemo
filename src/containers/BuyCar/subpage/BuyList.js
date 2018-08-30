/*
* @Author: zeroyul
* @Date:   2018-08-27 14:29:12
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-27 15:21:13
*/

import React from 'react'

import './style.less'
import BuyListComponent from '../../../components/BuyList/index.js'
import { getBuyCarLists } from '../../../axios/api.js'

class BuyList extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            goodsArr:[]
        })
    }

    componentWillMount(){
        const result =  getBuyCarLists();
        const that = this
        result.then(res=>{
            that.setState({
                goodsArr:res
            })
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })


    }

    render() {
        return (
            <div className="buy-list-container">
                <h1>购买列表</h1>
                { this.state.goodsArr.length == 0
                    ?<div> 购物车为空 </div>
                    :<BuyListComponent data={this.state.goodsArr}/>

                }
            </div>
        )
    }
}

export default BuyList;