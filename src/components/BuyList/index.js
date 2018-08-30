/*
* @Author: zeroyul
* @Date:   2018-08-27 14:47:09
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-30 14:39:40
*/

import React from 'react'
import Item from './Item/index.js'



class BuyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            goodsArr:[],
            delFlag:false
        })
    }
    componentWillMount(){
        this.setState({
            goodsArr:this.props.data
        })
    }
    componentDidUpdate(){
        window.localStorage.setItem('shuju',JSON.stringify(this.state.goodsArr))
    }
    render() {
        return (
            <div className="buy-component-container">
                <h1>购买商品列表</h1>
                {this.state.goodsArr.map((item,index)=>{
                    return <Item
                    data={item}
                    key={index}
                    delFlag={this.state.delFlag}
                    chosenHandle={this.chosenHandle.bind(this,index)}
                    addNum={this.addNum.bind(this,index)}
                    reduceNum={this.reduceNum.bind(this,index)}
                    del={this.del.bind(this,index)}/>
                })}

            </div>
        )
    }
    chosenHandle(i,e){
        //选中与否

        this.setState({
            goodsArr:this.state.goodsArr.map((ele,index)=>{
                if(i==index){
                    ele.isChosen = !ele.isChosen
                    return ele
                }else{
                    return ele
                }
            })
        })

    }
    addNum(i,e){
        //大于库存则不能再加
        this.setState({
            goodsArr:this.state.goodsArr.map((ele,index)=>{
                if(i==index){
                    if(ele.num>=ele.stocknum){
                        alert("无更多库存")
                        return ele
                    }else{
                        ele.num=ele.num*1+1
                        return ele
                    }

                }else{
                    return ele
                }
            })
        })

    }

    reduceNum(i,e){
        //=1 时 再减则需要删除了
        const that=this
        this.setState({
            goodsArr:this.state.goodsArr.map((ele,index)=>{
                if(i==index){
                    if(ele.num<2){
                        alert("删除")

                        return ele
                    }else{
                        ele.num=ele.num*1-1
                        return ele
                    }

                }else{
                    return ele
                }
            })
        })

    }
    del(i){
        console.log('del')
        this.setState({
            goodsArr:this.state.goodsArr.filter((ele,index)=>{

                //return index != i
                if(index != i ){
                    return true
                }
            })
        })
        console.log(this.state.goodsArr)


    }
}

export default BuyList;