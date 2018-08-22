/*
* @Author: zeroyul
* @Date:   2018-08-02 11:34:20
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-07 14:15:57
*/

import React, { Component } from 'react';
import {getInfoData} from '../../fetch/detail/detail.js';
import axios from 'axios'
import './index.less';
import {getTest} from '../../axios/api.js'


class TextFetch extends Component {
  render() {
    return (
      <div className="App">
        我是fetch测试
      </div>
    );
  }
  componentDidMount(){
    //封装axious后请求的
    let result2 = getTest();

    result2.then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })

    //封装fetch后请求的
    const result = getInfoData();
    result.then(response =>{
       return response.json();
    })
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })

    //axious测试
    console.log('测试')
    axios.post('http://t.h5.air-cooking.com/Web/Courses/getCourseOrderList',{})
    .then(function(res){
        console.log(res.data);
    })
    .catch(function(error){
        console.log(error);
    })

    // 本地json测试
    axios.get('/mock/test.json',{})
    .then(function(res){
        console.log(res.data);
    })
    .catch(function(error){
        console.log(error);
    })

    //fetch测试
    fetch('/mock/test.json')
    .then(res =>{
        res.json().then(data =>{
            console.log(data)
        })
    })
    fetch('http://t.h5.air-cooking.com/Web/Courses/getCourseOrderList')
    .then(res =>{
        res.json().then(data =>{
            console.log(data)
        })
    })



  }

}

export default TextFetch;
