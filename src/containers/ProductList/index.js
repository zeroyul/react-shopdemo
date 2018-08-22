/*
* @Author: zeroyul
* @Date:   2018-08-20 14:30:47
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-21 15:41:57
*/

import React from 'react'

import List from './subpage/List.js'

import './style.less'

class ProductList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="product-list">
            {/*search 框*/}
                <List />
            </div>
        )
    }
}

export default ProductList;