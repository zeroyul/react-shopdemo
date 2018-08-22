/*
* @Author: zeroyul
* @Date:   2018-08-15 13:50:35
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-16 17:40:35
*/

import React from 'react'

import './style.less'

import Item from './Item/index.js'

class ThemeShop extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        const data = [1,2,3,4];
        return (
            <div className="theme-shop">
                <h1>热销推荐</h1>
                <ul>
                {data.map((item,index)=>{
                    return <Item key={index} match={this.props.match}/>
                })}
                </ul>
            </div>
        )
    }
}

export default ThemeShop;