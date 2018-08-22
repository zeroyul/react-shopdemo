/*
* @Author: zeroyul
* @Date:   2018-08-17 10:37:56
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-22 12:01:39
*/

import React from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

import './style.less'

import Item from './Item/index.js'

class ClassifySwiper extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            currentIndex:0,//左侧导航栏当前状态
            swiper:{},//swiper组件的初始化 供其它事件调用
        })

    }
    componentDidMount(){
        //console.log(this.state.currentIndex)
        console.log(this.props.data)
         //swiper
        const that = this;
        const swiper =  new Swiper(this.swiperID,{
                direction:'vertical',
                slidesPerView:'auto',
                on:{
                    slideChangeTransitionEnd:function(){
                        that.setState({
                            currentIndex:this.activeIndex
                        })
                        console.log(this.activeIndex)
                    }
                },
            })
        this.setState({
            swiper:swiper
        })
    }



    componentDidUpdate(){
        console.log(this.props.data)
        //数据更新之后更新swiper
        this.state.swiper.update()

    }
    render() {
        const data = this.props.data;
        console.log(data)

        return (
            <div className="classify-swiper">
                <section className="left-section">
                    {data.map((item,index)=>{
                        const activeClass = this.state.currentIndex == index ? ' active':'';
                        return <div onClick={this.clickHandler.bind(this,index)} className={`left-item ${activeClass}`} key={index}><span>{item.oneName}{index}</span></div>
                    })}

                </section>
                <section className="right-section">
                    <section className="swiper-container" style={{height:"100%"}} ref={self => this.swiperID = self}>
                       <ul className="swiper-wrapper">

                            {data.map((item,index)=>{

                                return <Item key={index} data={data[index]}/>
                            })}


                       </ul>

                    </section>
                </section>
            </div>
        )

    }

    /*


     */

    clickHandler(index,e){
            console.log(index)
            this.setState({
                currentIndex:index
            })
            this.state.swiper.slideTo(index,1000,false);//滑动到分类处

    }
}

export default ClassifySwiper;