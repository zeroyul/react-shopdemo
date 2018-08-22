/*
* @Author: zeroyul
* @Date:   2018-08-10 11:35:02
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-16 10:39:17
*/

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export function auth(state={isAuth:false,user:'湫叶'},action){

    switch(action.type){
        case LOGIN:
         return {...state,isAuth:true}
        case LOGOUT:
         return {...state,isAuth:false}
        default:
         return state
    }
}

//action createStore
export function login(){
    return {type:LOGIN}
}

export function logout(){
    return {type:LOGOUT}
}