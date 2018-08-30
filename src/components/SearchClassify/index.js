/*
* @Author: zeroyul
* @Date:   2018-08-23 14:48:47
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 17:26:36
*/

import React from 'react'
import SearchInput from '../SearchInput/index.js'
import {withRouter} from 'react-router-dom'

import './style.less'

class SearchClassify extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props)
        return (
            <div className="classify-header clear">
                <div className="home-header-middle">
                    <div className="search-container">
                        <SearchInput value="" enterHandle = {this.enterHandle.bind(this)}/>

                    </div>

                </div>

            </div>
        )
    }

    enterHandle(value){
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

export default withRouter(SearchClassify);