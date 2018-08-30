/*
* @Author: zeroyul
* @Date:   2018-08-23 15:29:22
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-23 16:18:47
*/

import React from 'react'

import ThemeShopComponent from '../../../components/ThemeShop/index.js'

import {getProductList} from '../../../axios/api.js'

class ThemeShop extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            shopGet:[]
        })
    }

    componentDidMount(){
            //axious获取
            let resultList = getProductList();
            const that = this;
            resultList.then(res => {

                that.setState({
                    shopGet:res.data
                })
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })


        }
    render() {
        return (

            <ThemeShopComponent data={this.state.shopGet} match={this.props.match} />

        )
    }
}

export default ThemeShop;