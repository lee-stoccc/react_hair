import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import axios from 'axios';
import Index from './index/Index'
import Login from './login/Login'
import Regist from './regist/Regist'
import Mine from './mine/Mine'
import Mall from './mall/Mall'
import Zuopin from './zuopin/Zuopin'
import Shopdetail from './shopdetail/Shopdetail'
import Gooddetail from './gooddetail/Gooddetail'

import ST from './components/mask/Mask'


React.Component.prototype.$axios=axios;
axios.defaults.baseURL = 'http://localhost/tp5/public/index.php';
// axios.defaults.baseURL = 'http://119.23.241.137:8080/tp5/public/index.php';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// React的Component方法 的 原型对象上添加方法
React.Component.prototype.goUrl=function (paths,par) {
    let that = this;
    that.props.history.push({pathname:`${paths}`,state:par});
};

// 弹框函数
React.Component.prototype.Alert=function (isShow,con_text) {
    let t =this;
    t.setState({
        isShow:isShow,
        con_text:con_text
    },function () {
        setTimeout(function () {
            t.setState({
                isShow:'0'
            })
        },2000)
    });
};
// 定义隐藏常量
React.Component.prototype.dis={
    display:'none'
};
// 定义显示常量
React.Component.prototype.show={
    display:''
};
React.Component.prototype.UID=1
React.Component.prototype.CID=1

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/Tp' component={ST}  />
            <Route path='/app' component={App} exact />
            <Route path='/index' component={Index}  />
            <Route path='/regist' component={Regist}  />
            <Route path='/login' component={Login}  />
            <Route path='/mine' component={Mine}  />
            <Route path='/mall' component={Mall}  />
            <Route path='/zuopin' component={Zuopin}  />
            <Route path='/Gooddetail' component={Gooddetail}  />
            <Route path='/Shopdetail/:id/:cid/:name' component={Shopdetail}  />
        </Switch>

    </Router>,
    document.getElementById('root')

);
registerServiceWorker();
