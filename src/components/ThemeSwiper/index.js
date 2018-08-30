/*
* @Author: zeroyul
* @Date:   2018-08-14 16:26:43
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-22 15:13:37
*/

import React from 'react'
import {Link} from 'react-router-dom'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


class ThemeSwiper extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
          swiper:{},//swiper组件的初始化 供其它事件调用
        })
    }
    componentDidMount(){

            //swiper
            const swiper = new Swiper(this.swiperID,{
              loop:true,
              slidesPerView:1.5,
              centeredSlides:true,
              spaceBetween:40,
              pagination:{
                el:this.paginateID,
              },
              observer: true
            })
            this.setState({
                swiper:swiper
            })


    }
    componentDidUpdate(){
      //数据更新之后更新swiper  滑动到指定位置

      this.state.swiper.update()
    }

    render() {
        const match = this.props.match;
        const items = this.props.itemsGet;
        return (
            <div>

                <section className="swiper-container" ref={self => this.swiperID = self}>
                   <ul className="swiper-wrapper">
                      {items.map((item,index) => {
                        return <li className="swiper-slide" key={index}>
                        <Link to={`${match.url}/about/${item.id}`}>
                        <img src={item.imgUrl}  alt={item.id}/>
                        </Link>
                        </li>
                      }) }
                   </ul>
                   <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
                </section>
            </div>
        )
    }
}

export default ThemeSwiper
