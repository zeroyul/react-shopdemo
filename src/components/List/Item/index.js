/*
* @Author: zeroyul
* @Date:   2018-08-21 10:56:35
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-21 15:39:07
*/

import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'


class Item extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const data = this.props.data
        //是否有数量
        const num = 3
        console.log(data)
        return (
            <div className="list-item">

                <div><Link to={`/App/Product/${data.productid}`}><img src={data.coverpicpath} alt=""/></Link></div>
                    <div>
                    <Link to={`/App/Product/${data.productid}`}>
                        <div className="name">{data.productname}</div>
                        <div className="des">{data.simpledesc}</div>
                        <div className="price">{data.saleprice}<span>RMB</span></div>
                    </Link>
                    </div>

                <div>
                    {
                        num > 3 ?
                        <div className="num-control">
                        <section>+</section>
                        <section>5</section>
                        <section>-</section>
                        </div>
                        :<i className="iconfont icon-icon-gouwuche"></i>
                    }


                </div>


            </div>
        )
    }
}

export default Item;