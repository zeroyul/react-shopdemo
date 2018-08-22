/*
* @Author: zeroyul
* @Date:   2018-08-20 15:57:58
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-21 10:43:41
*/

import React from 'react'
import './style.less'



class LoadMore extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ?<span>加载中...</span>
                    :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }

    loadMoreHandle(){
        //执行传递过来的loadMoreData
        this.props.loadMoreFn()
        console.log('yes')
    }

    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback(){
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight){
                console.log(33333)
                loadMoreFn()
            }
        }
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)
    }
}

export default LoadMore;