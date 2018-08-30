/*
* @Author: zeroyul
* @Date:   2018-08-27 14:49:42
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-30 14:10:06
*/

import React from 'react'


import './style.less'


class Item extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const data = this.props.data;

        return (
            <div className="buycar-item">
                <div>
                { data.isChosen
                    ? <i className="haschosen iconfont icon-icon-jiarugouwuchechenggong " onClick={this.props.chosenHandle}></i>
                    : <i className=" iconfont icon-icon-quan" onClick={this.props.chosenHandle}></i>}

                </div>
                <div><img src={data.itemsimg} alt=""/></div>
                    <div>

                        <div className="name">{data.itemsname}</div>

                        <div className="price">{data.itemsprice}<span>RMB</span></div>

                    </div>

                <div>
                    {
                        this.props.delFlag
                        ?<div className="num-control">
                        <section onClick={this.props.addNum.bind(this)}>+</section>
                        <section>{data.num}</section>
                        <section onClick={this.props.reduceNum.bind(this)}>-</section>
                        </div>
                        :<div className="del-btn">
                        <div className="del-right" onClick={this.props.del.bind(this)}>删<br/><br/>除</div>
                        </div>

                    }


                </div>
            </div>
        )
    }
    chosenHandle(){
        //选中与否
        this.setState({
            isChosen:!this.state.isChosen
        })
    }

    addNum(){
        //大于库存则不能再加
        if(this.state.amount>=this.state.stocknum){
            alert("无更多库存")
            return
        }
        let amount = this.state.amount*1+1
        this.setState({
            amount:amount
        })
    }

    reduceNum(){
        //=1 时 再减则需要删除了
        if(this.state.amount<2){
            alert("删除")
            return
        }
        let amount = this.state.amount*1-1
        this.setState({
            amount:amount
        })
    }

}

export default Item;