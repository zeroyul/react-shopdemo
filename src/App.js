import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.less';

import {logout} from './store/AuthStore.js';

//此页相当于router页面
import {Route, NavLink,Redirect,Switch} from 'react-router-dom';

import TestIcon from './containers/TestIcon/index.js';//导入App组件
import About from './containers/About/index.js';//导入About 组件
import TextFetch from './containers/TextFetch/index.js';//导入Inbox 组件
import TestLifeCycle from './containers/TestLifeCycle/index.js';//导入生活方式
import TestRedux from './containers/TestRedux/index.js';//导入redux
//正式页
import RouterRoot from './containers/RouterRoot/index.js'
import Classify from './containers/Classify/index.js'//分类页
import BuyCar from './containers/BuyCar/index.js'//购物车页
import Mine from './containers/Mine/index.js'//个人中心页

import NotFound from './containers/404.js'//notfound
import Index from './containers/Theme/index.js'//首页

import SetUp from './containers/SetUp/index.js'//设置退出页
import ProductList from './containers/ProductList/index.js'//商品列表页
import Product from './containers/Product/index.js'//商品详情页

//装饰器模式
@connect(
  state=>({auth:state.auth}),
  {logout}
)
class App extends Component {

  render(){

        console.log(this.props)
        const match = this.props.match
        const redirectToLogin = <Redirect to="/login"/>
        const app = (
            <div className="app-container">


                 {/*<ul className="nav">
                    <li><NavLink exact activeClassName="selected" to={`${match.url}/`}>App</NavLink></li>
                    <li><NavLink activeClassName="selected" to={`${match.url}/About/123`}>About</NavLink></li>
                    <li><NavLink activeClassName="selected" to={`${match.url}/TextFetch`}>fetch测试</NavLink></li>
                    <li><NavLink activeClassName="selected" to={`${match.url}/TestIcon`}>时间轮播测试</NavLink></li>
                    <li><NavLink activeClassName="selected" to={`${match.url}/TestRedux`}>redux测试</NavLink></li>
                    <li><NavLink activeClassName="selected" to={`${match.url}/TestLifeCycle`}>生命周期测试</NavLink></li>
                </ul>*/}





                {/*注销按钮的显示隐藏
                {this.props.auth.user}
                {this.props.auth.isAuth?<button onClick={this.props.logout}>注销</button>:null}*/}





                <Switch>
                    <Route exact path={`${match.url}/`} component={Index} />
                    <Route path={`${match.url}/Classify`} component={Classify} />
                    <Route path={`${match.url}/BuyCar`} component={BuyCar} />
                    <Route path={`${match.url}/Mine`} component={Mine} />
                    <Route path={`${match.url}/TextFetch`} component={TextFetch} />
                    <Route path={`${match.url}/TestRedux`} component={TestRedux} />
                    <Route path={`${match.url}/About/:id`} component={About} />
                    <Route path={`${match.url}/TestIcon`} component={TestIcon} />
                    <Route path={`${match.url}/TestLifeCycle`} component={TestLifeCycle} />
                    <Route path={`${match.url}/SetUp`} component={SetUp} />
                    <Route path={`${match.url}/Product/:productId`} component={Product} />
                    <Route path={`${match.url}/ProductList/:classifyId`} component={ProductList} />
                    <Route path={`${match.url}/:localtion`} component={NotFound} />
                </Switch>
            </div>

        )

        // redirectToLogin
        return this.props.auth.isAuth?app:app
    }
}


export default App;
