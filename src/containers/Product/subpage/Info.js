/*
* @Author: zeroyul
* @Date:   2018-08-23 17:53:02
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-24 14:07:49
*/

import React from 'react'

import {getProductDetail} from '../../../axios/api.js'


class Info extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){

        const params ={
            "productId":this.props.productId
        }
        let resultProduct = getProductDetail(params);
        const that = this;
        resultProduct.then(res=>{
            that.setState({
                product:res.data
            })
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })

    }
    render() {
        return (
            <div style={{paddingTop:50}}>
                <h1>详细信息{this.props.productId}</h1>
            </div>
        )
    }
}

export default Info;