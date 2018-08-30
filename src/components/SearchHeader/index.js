/*
* @Author: zeroyul
* @Date:   2018-08-23 10:17:39
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 16:57:14
*/

import React from 'react'
import SearchInput from '../SearchInput/index.js'
import {Link ,withRouter} from 'react-router-dom'

import './style.less'

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props)
        return (
            <div className="home-header clear">
                <div className="float-left home-header-left">
                    <Link to="/App/TestIcon"><i className="iconfont icon-icon_saoma"></i></Link>
                </div>

                <div className="float-right home-header-right">
                    <Link to="/App/TestIcon"><i className="iconfont icon-icon_dianpu"></i></Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <SearchInput value="" enterHandle = {this.enterHandle.bind(this)}/>

                    </div>

                </div>

            </div>
        )
    }

    enterHandle(value){
        console.log(value)
        console.log(this.props)
        if (!String.prototype.trim){
            String.prototype.trim = function () {
               return this.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
            }
        }
        let searchValue = value.trim();
        if( searchValue == '' ){
            searchValue = '牛肉'
        }

        //this.props.history.push(`/App/ProductList/${encodeURIComponent(value)}`)
        this.props.history.push({pathname:'/App/ProductList/00}',query:{search:searchValue}})
    }
}

export default withRouter(SearchHeader);