/*
* @Author: zeroyul
* @Date:   2018-08-10 14:14:07
* @Last Modified by:   zeroyul
* @Last Modified time: 2018-08-10 14:16:32
*/

import {combineReducers} from 'redux'
import {counter} from './storeTest.js'
import {auth} from './AuthStore.js'
export default combineReducers({counter,auth})
