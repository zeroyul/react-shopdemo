/*
* @Author: zeroyul
* @Date:   2018-08-07 15:24:15
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-07 17:02:17
*/

import React from 'react'


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log("Initial render");
        console.log("constructor");
        this.state = {str: "hello"};
    }

    componentWillMount() {
        console.log(`componentWillMount ${this.state.str} !`)
        console.log(this.props.num)
    }

    componentDidMount(){
        console.log(`componentDidMount ${this.state.str} !`)
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
        console.log(this.props.num)
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        console.log(this.props.num)
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
        console.log(this.props.num)
        console.log(this.state.str)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
        console.log(this.props.num)
        console.log(this.state.str)
    }

    componentWillUnmount(){
        alert("componentWillUnmount");
    }

    setTheState(){
        let s = "hello";
        if (this.state.str === s){
            s = "HELLO";
        }
        this.setState({
            str:s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        console.log("我是LifeCycle的render")
        return (
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num)}</h2></span>
                <br/>
                <span>{"state:"}<h2>{this.state.str}</h2></span>
            </div>
        )

    }
}

export default LifeCycle;