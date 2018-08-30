/*
* @Author: zeroyul
* @Date:   2018-08-23 15:02:42
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 17:13:42
*/



import React from 'react'
import SearchInput from '../SearchInput/index.js'
import {Link ,withRouter} from 'react-router-dom'

import './style.less'

class SearchProductList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props)
        return (
            <div className="home-header clear product-list-search">
                <div className="float-left home-header-left" onClick={this.goBack.bind(this)}>
                    <i className="iconfont icon-icon-jiantouback"></i>
                </div>

                <div className="float-right home-header-right">
                    <Link to="/App/Buycar"><i className="iconfont icon-icon-gouwuche"></i></Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <SearchInput value={this.props.keyword} enterHandle = {this.enterHandle.bind(this)}/>

                    </div>

                </div>

            </div>
        )
    }

    enterHandle(value){
        console.log(value)
        console.log(this.props)
        this.props.history.push(`/App/ProductList/22`)
    }

    goBack(){
        console.log(2)
        //返回直接goback即可
        this.props.history.goBack()
    }
}

export default withRouter(SearchProductList);