/*
* @Author: zeroyul
* @Date:   2018-08-06 09:42:46
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-20 15:07:50
*/

import axios from 'axios'
import qs from 'qs'
import 'es6-promise'

//阿西吧  baseURL TMD 写错了  。。。。。。。。。
axios.defaults.baseURL = 'http://localhost:3000/' //配置默认axios的默认URL
axios.defaults.withCredentials = true  //配置允许跨域携带cookie
axios.defaults.timeout = 100000 //配置超时时间

export function get(url,data){
    return new Promise((resolve,reject) =>{
        axios.get(url).then(res =>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export function post(url,data){
    return new Promise ((resolve,reject) =>{
        axios.post(url,qs.stringfy(data),{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res =>{
            resolve(res.data)
        }).catch(err =>{
            reject(err)
        })
    })
}

/*// 拦截请求
axios.interceptors.request.use(config => {
    config.setHeaders([
        null
        // 在这里设置请求头与携带token信息
    ])
    return config
})

// 拦截响应
axios.interceptors.response.use(response => {
     // 在这里你可以判断后台返回数据携带的请求码
    if (response.data.retcode === 200 || response.data.retcode === '200') {
      return response.data.data || response.data
    }else {
      // 非200请求抱错
      throw Error(response.data.msg || '服务异常')
    }
})*/

export default class Http {
  static get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  static post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      ).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
