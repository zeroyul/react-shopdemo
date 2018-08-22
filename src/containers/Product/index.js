/*
* @Author: zeroyul
* @Date:   2018-08-20 09:35:51
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-20 11:36:22
*/

import React from 'react'

import {getProductDetail} from '../../axios/api.js'


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            product:{}
        })
    }
    componentDidMount(){
        console.log(this.props.match.params.productId)
        const params ={
            "productId":this.props.match.params.productId
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
            <div className="product">
                <h1>详情页{this.props.match.params.productId}</h1>
            </div>
        )
    }
}

export default Product;