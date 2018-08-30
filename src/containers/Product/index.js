/*
* @Author: zeroyul
* @Date:   2018-08-20 09:35:51
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-24 14:54:16
*/

import React from 'react'



import BuyHeader from './subpage/BuyHeader.js'
import BuyFooter from './subpage/BuyFooter.js'
import Info from './subpage/Info.js'


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            product:{}
        })
    }
    componentDidMount(){
        console.log(this.props.match.params.productId)



    }
    render() {
        const productId = this.props.match.params.productId
        return (
            <div className="product">

                <BuyHeader />
                <Info productId={productId}/>
                <BuyFooter productId={productId}/>
            </div>
        )
    }
}

export default Product;