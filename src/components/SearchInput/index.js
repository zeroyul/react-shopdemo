/*
* @Author: zeroyul
* @Date:   2018-08-23 10:29:21
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 14:42:08
*/

import React from 'react'


import './style.less'

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
    }
    render() {
        return (
            <div >
            <input className="search-input"
             type="text"
             placeholder="请输入"
             value={this.state.value}
             onChange={this.changeHandle.bind(this)}
             onKeyUp={this.keyUpHandle.bind(this)}/>
            <i className="iconfont icon-search" onClick={this.submitSearch.bind(this)}></i>
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            value:this.props.value || ''
        })
    }

    changeHandle(e){
        var val = e.target.value
        this.setState({
            value:val
        })
    }

    keyUpHandle(e){
        if(e.keyCode !== 13){
            return
        }
        this.props.enterHandle(this.state.value)
    }
    submitSearch(){
        this.props.enterHandle(this.state.value)
    }
}

export default SearchInput;