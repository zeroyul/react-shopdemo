/*
* @Author: zeroyul
* @Date:   2018-08-20 15:53:43
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-21 15:41:25
*/

import React from 'react'
import Item from './Item/index.js'
import './style.less'


class List extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const data = this.props.data
        console.log(data)
        return (
            <div className="list-container">

                {data.map((item,index)=>{
                    return <Item key={index} data={item} />
                })}

            </div>
        )
    }
}

export default List;