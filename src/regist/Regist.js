import React, { Component } from 'react';
import './regist.css'
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
                <Input placeholder='请输入手机号码' input='inputs'/>
                <div className='regist'>
                    <Input placeholder='请输入验证码' input='inputs'/>
                    <Buttom button='获取验证码' button_1='get_code'/>
                </div>

                <Input placeholder='请输入密码' input='inputs'/>
                <Input placeholder='请再次输入密码' input='inputs'/>
                <Buttom button='立即登入' button_1='teldenlgu'/>
            </div>
        );
    }
}

export default Login;
