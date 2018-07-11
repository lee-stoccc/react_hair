import React, { Component } from 'react';
import './login.css'
import Input from '../components/input/Input'
import Buttom from '../components/buttom/Bottom'

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            src:require('../staic/imgs/2-1.png')
        }
    }


    render() {
        return (
            <div className='Login'>
                <div className='login_img_1'><img src={this.state.src} alt=""/></div>
                <Input placeholder='请输入手机号码/账号' input='inputs'/>
                <Input placeholder='请输入密码' input='inputs'/>
                <span className='password'>忘记密码</span>
                <Buttom button='立即登录' button_1='lijidenglu'/>
                <Buttom button='手机验证码登录' button_1='teldenlgu'/>
                <div  className='Login_1'>
                    <div className='line'></div>
                    <div className='Login_1_2'>第三方登入</div>
                </div>
            </div>
        );
    }
}

export default Login;
