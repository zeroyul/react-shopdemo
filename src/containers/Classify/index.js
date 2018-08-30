/*
* @Author: zeroyul
* @Date:   2018-08-07 14:49:11
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 15:25:52
*/

import React from 'react'
import imgUrl from '../../img/classifybanner.png'
import {Link} from 'react-router-dom'

import './style.less'

import RouterRoot from '../RouterRoot/index.js'
import SearchClassify from '../../components/SearchClassify/index.js'
import ClassifySwiper from '../../components/ClassifySwiper/index.js'

import {getClassify} from '../../axios/api.js'

class Classify extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            classify:[]
        })
    }
    componentDidMount(){
        this.getClassifyData()
        //获取首页跳过来的分类id

        console.log(this.props)
    }
    render() {

        const oneId= this.props.location.query ? this.props.location.query.index:'0'



        return (
            <div className="classify">

            {/*search页*/}
            <SearchClassify />

            <Link to="/App/TestIcon">
                <img className="img-float-left" alt="" src={imgUrl} />
            </Link>
            {/*主体swiper*/}
            <ClassifySwiper data={this.state.classify} oneId={oneId}/>
            <RouterRoot />
            </div>
        )
    }
    getClassifyData(){
        //获取分类数据
        let resultClassify = getClassify();
            const that = this;
            resultClassify.then(res => {

                that.setState({
                    classify:res.classify

                })

            }).catch(err => {
                console.log(err)
            })
    }

}

export default Classify;