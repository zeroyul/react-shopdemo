/*
* @Author: zeroyul
* @Date:   2018-08-20 14:30:47
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-24 10:27:14
*/

import React from 'react'


import List from './subpage/List.js'
import SearchProductList from '../../components/SearchProductList/index.js'

import './style.less'

class ProductList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const keyword = this.props.location.query ? this.props.location.query.search : ''
        console.log(keyword)
        return (
            <div className="product-list">
            {/*search 框*/}
                <SearchProductList keyword={keyword} />
                <List keyword={keyword}/>
            </div>
        )
    }
}

export default ProductList;