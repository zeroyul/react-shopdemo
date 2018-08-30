/*
* @Author: zeroyul
* @Date:   2018-08-15 11:28:37
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-22 14:26:40
*/

import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'



class Item extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const data = this.props.data;


        return (
            <section className="theme-classify-item">
                    <div className="top clear">
                        <Link to={{pathname:'App/Classify',query:{index:'2'}}}  className="clear">
                        <img src={data.imgUrl} alt=""/>

                        <div className="classify-des">
                        <h2>&nbsp;{data.classifyone}</h2>
                        <p>{data.des}</p>
                        <span>Show Now</span>
                        </div>
                        </Link>
                    </div>
                    <ul>
                        {data.recommond.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={`${this.props.match.url}/product/${item.id}`}>
                                        <img src={item.imgUrl} alt=""/>
                                        <div className="name">{item.name}</div>
                                        <div className="price">￥{item.price}</div>
                                    </Link>
                                </li>
                                )
                        })}

                    </ul>
                </section>
        )
    }
}

export default Item;