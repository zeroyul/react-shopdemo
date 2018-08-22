/*
 * @Author: zeroyul
 * @Date:   2018-08-17 15:32:55
 * @Last Modified by:   zeroyul
 * @Last Modified time: 2018-08-20 14:51:21
 */

import React from 'react'
import './style.less'
import { Link} from 'react-router-dom'


class Item extends React.Component {

    render() {
        const data = this.props.data

        return ( < li className = "swiper-slide classify-item" >

            < div className = "head" >
            < span > {data.oneName} < /span> < div className = "line" > < /div >
            < /div>
            < ul className = "main" >
            {data.twoNames.map((item, index) => {
                    return (
                        < li  key={index}><Link to={`/App/ProductList/${item.id}`}> < img alt="" src = {item.imgUrl} / >
                        < div > {item.name} < /div></Link>
                        < /li >

                    )
                })
            }
            < /ul>
            < /li>

        )

    }

}


export default Item;