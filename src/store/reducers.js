/*
* @Author: zeroyul
* @Date:   2018-08-10 14:14:07
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-24 10:50:33
*/

import {combineReducers} from 'redux'
import {counter} from './storeTest.js'
import {auth} from './AuthStore.js'
import {buycar} from './BuyCarStore.js'
export default combineReducers({counter,auth,buycar})
