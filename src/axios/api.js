/*
* @Author: zeroyul
* @Date:   2018-08-06 17:10:44
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-27 14:59:42
*/

import {get,post} from './http.js'

export function getTest(){
    const result=get('mock/fetchNeed/index.json');
    return result;
}

export function postTest(){
    const result=post('mock/fetchNeed/index.json');
    return result;
}

//首页轮播数据请求
export function getThemeSwiper(){
    const result=get('mock/theme/themeSwiper.json');
    return result;
}

//分类页数据请求
export function getClassify(){
    const result=get('mock/classify/data.json');
    return result;
}

//列表页面
export function getProductList(){
    const result=get('mock/productList/data.json');
    return result;
}


//详情页数据请求 带参数请求
export function getProductDetail(params){
    console.log(params)
    const result=get('mock/product/data.json',params);
    return result;
}

//购物车商品数据
export function getBuyCarLists(){
    const result=get('mock/buyCarList/data.json');
    return result;
}
