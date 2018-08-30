/*
* @Author: zeroyul
* @Date:   2018-08-24 10:43:47
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-24 10:51:16
*/

const ADD_CAR = 'addGoods'
const REMOVE_CAR  = 'removeGoods'



export function buycar(state=0,action){
    switch (action.type){
        case 'addGoods':
            return state + 1
        case 'removeGoods':
            return state - 1
        default:
            return 0
    }

}

export function addCar(){
    return {type:ADD_CAR}
}

export function removeCar(){
    return {type:REMOVE_CAR}
}

//延迟添加，拖两天再给
export function addCarAsync(){
    return dispatch => {
        setTimeout(()=>{
            dispatch(addCar());
        }, 2000);
    }
}