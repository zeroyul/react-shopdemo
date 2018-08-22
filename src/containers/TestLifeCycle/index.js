/*
* @Author: zeroyul
* @Date:   2018-08-07 14:42:10
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-13 15:59:38
*/

/*
* @Author: zeroyul
* @Date:   2018-08-07 14:49:11
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-07 14:57:15
*/

import React from 'react'
import LifeCycle from '../../components/LifeCycle/index.js'

class TestLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:Math.random() * 100
        };
    }
    propsChange(){
        this.setState({
            num:Math.random() * 100
        });
    }
    setLifeCycleState(){
        this.refs.rLifeCycle.setTheState();
    }
    forceLifeCycleUpdate(){
        this.refs.rLifeCycle.forceItUpdate();
    }
    parentForceUpdate() {
        this.forceUpdate();
    }
    render() {

        return (
            <div>
                <div   onClick={this.propsChange.bind(this)}>propsChange</div>
                <div  onClick={this.setLifeCycleState.bind(this)}>setState</div>
                <div  onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</div>
                <div  onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</div>


                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        )

    }
}

export default TestLifeCycle;