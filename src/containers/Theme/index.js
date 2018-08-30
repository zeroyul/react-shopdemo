/*
* @Author: zeroyul
* @Date:   2018-08-23 10:09:45
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 15:35:10
*/

/*
* @Author: zeroyul
* @Date:   2018-08-08 17:04:09
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-17 09:46:37
*/

import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import axios from 'axios'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

import RouterRoot from '../../containers/RouterRoot/index.js'

import SearchHeader from '../../components/SearchHeader/index.js'

import ThemeSwiper from '../../components/ThemeSwiper/index.js'

import ThemeClassify from '../../components/ThemeClassify/index.js'

import ThemeShop from './subpage/ThemeShop.js'

import {getThemeSwiper,getThemeClassify} from '../../axios/api.js'

import './style.less'
//此页为首页
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemsGet:[],
            classifyGet:[]
        }

    }
    componentDidMount(){
            //axious获取
            let resultswiper = getThemeSwiper();
            const that = this;
            resultswiper.then(res => {

                that.setState({
                    itemsGet:res.swiper,
                    classifyGet:res.classify
                })
            }).catch(err => {
                console.log(err)
            })

            //swiper
            new Swiper(this.swiperID,{
              loop:true,
              slidesPerView:1.5,
              centeredSlides:true,
              spaceBetween:40,
              pagination:{
                el:this.paginateID,
              },
              observer:true
            })

        }

    render() {
        const match = this.props.match;
        const items = [{id:"1",imgUrl:"http://t.image.air-cooking.com/banner/home/20180517/5afd2f14cf826.jpg"},
    {id:"2",imgUrl:"http://t.image.air-cooking.com/banner/home/20180110/5a55ddf1b48ea.png"},
    {id:"3",imgUrl:"http://t.image.air-cooking.com/banner/home/20180110/5a55dd16b308c.jpg"},
    {id:"4",imgUrl:"http://t.image.air-cooking.com/banner/home/20180110/5a55dd986495b.jpg"}];


        return (
            <div className="theme">
                <SearchHeader />

                <div>
                 {/*头部*/}

                 {/*轮播*/}
                {/*<section className="swiper-container" ref={self => this.swiperID = self}>
                   <ul className="swiper-wrapper">
                      {items.map((item,index) => {
                        return <li className="swiper-slide" key={index}>
                        <Link to={`${match.url}/about/${item.id}`}>
                        <img src={item.imgUrl} style={{opacity:1}} alt={item.id}/>
                        </Link>
                        </li>
                      }) }
                   </ul>
                   <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
                </section>
                */}
                {/*组件轮播*/}
                <ThemeSwiper itemsGet={this.state.itemsGet} match={this.props.match}/>
                {/*活动导航*/}
                <nav >
                    <div><Link  to={`${match.url}/TestRedux`}><i className="iconfont icon-icon_caidan-"></i><div>门店菜谱</div></Link></div>
                    <div><Link  to={`${match.url}/TestRedux`}><i className="iconfont icon-xianshiqianggou"></i><div>爆款推荐</div></Link></div>
                    <div><Link  to={`${match.url}/TestRedux`}><i className="iconfont icon-icon_pintuan"></i><div>限时拼团</div></Link></div>
                    <div><Link  to={`${match.url}/TestRedux`}><i className="iconfont icon-icon_yaoqing"></i><div>邀请有礼</div></Link></div>

                </nav>

                 {/*分类的二级循环 item组件可以*/}
                <ThemeClassify data={this.state.classifyGet} match={this.props.match}/>
                 {/*热销推荐 加购复杂 redux和localstorage*/}
                <ThemeShop data={this.state.shopGet} match={this.props.match} />
                <div onClick={this.clickLinkTo.bind(this,'56')}>T跳一跳</div>
                </div>

                <RouterRoot match={match} />
            </div>

        )


    }

    clickLinkTo(data,e){
            console.log(data)
            this.props.history.push(`/App/About/${data}`);
    }
}

export default Index;
