/*
* @Author: zeroyul
* @Date:   2018-08-02 11:33:57
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-13 15:40:32
*/


import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'

import 'swiper/dist/css/swiper.min.css'
import '../../font/iconfont.css'

import './index.less';

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()}
  }

  componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    //swiper
    new Swiper(this.swiperID,{
      loop:true,
      slidesPerView:1.5,
      centeredSlides:true,
      spaceBetween:20,
      pagination:{
        el:this.paginateID,
      },
    })
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
        date: new Date()
    });
  }

  render() {
    const items = [{id:"1",imgUrl:"http://t.image.air-cooking.com/banner/home/20180517/5afd2f14cf826.jpg"},
    {id:"2",imgUrl:"http://t.image.air-cooking.com/banner/home/20180110/5a55ddf1b48ea.png"},
    {id:"3",imgUrl:"http://t.image.air-cooking.com/banner/home/20180110/5a55dd16b308c.jpg"},
    {id:"4",imgUrl:"http://t.image.air-cooking.com/banner/home/20180110/5a55dd986495b.jpg"}];
    return (
      <div className="test-icon">
        我是Test
        <h3>It is {this.state.date.toLocaleTimeString()}</h3>
        <div >
         <section className="swiper-container" ref={self => this.swiperID = self}>
           <ul className="swiper-wrapper">
              {items.map((item,index) => {
                return <li className="swiper-slide" key={index}>
                <img src={item.imgUrl} style={{opacity:1}} alt={item.id}/>
                <i className="iconfont icon-icon-baocuo"></i> 我是数字：{item.id}
                </li>
              }) }
           </ul>
           <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
         </section>
        </div>
      </div>
    );
  }
}

export default Test;