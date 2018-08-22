/*
* @Author: zeroyul
* @Date:   2018-08-14 17:25:24
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-17 09:46:51
*/
import React from 'react'
import {Link} from 'react-router-dom'
import Item from './Item/index.js'
import './style.less'



class ThemeClassify extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const data = this.props.data;
        return (
            <div className="theme-classify">

                {data.map((item,index)=>{
                    return <Item key={index} data={item} match={this.props.match} />
                })}



            </div>
        )
    }
}

export default ThemeClassify;