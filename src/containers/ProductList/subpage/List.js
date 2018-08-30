/*
* @Author: zeroyul
* @Date:   2018-08-20 15:44:51
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 17:19:46
*/

import React from 'react'
import './style.less'

import {getProductList} from '../../../axios/api.js'
import ListComponent from '../../../components/List/index.js'
import LoadMore from '../../../components/LoadMore/index.js'


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            hasMore:false,
            isLoadingMore:false,
            page:1
        }
    }

    render() {
        return (
            <div className="list-container">

                {
                    this.state.data.length
                    ?<ListComponent data={this.state.data}/>
                    :<div>加载中...</div>
                }
                {
                    this.state.hasMore
                    ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    :<div>木有了，到底了</div>
                }


            </div>
        )
    }

    componentDidMount(){

        this.loadFirstPageData()


    }

    loadFirstPageData(){
        console.log(this.props.keyword)
        const keyword = this.props.keyword || ''
        let result = getProductList(0,keyword);
        this.resultHandle(result)
    }

    loadMoreData(){
        this.setState({
            isLoadingMore:true
        })
        const page = this.state.page
        const result = getProductList(page)
        this.resultHandle(result)

        //增加page的计数
        this.setState({
            page:page+1,
            isLoadingMore:false
        })
    }
    //数据处理
    resultHandle(result){
        result.then(res => {
            const hasMore = res.hasMore
            const data = res.data
            this.setState({
                hasMore:hasMore,
                data:this.state.data.concat(data)
            })

        }).catch(err => {
            console.log(err)
        })
    }

}

export default List;