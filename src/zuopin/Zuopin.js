import React, { Component } from 'react';
import './zuopin.css'
import Search from '../components/search/Search'
import Foot from '../components/footer/Footer'
import Goods from '../components/goods/Goods'
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            src:require('../staic/imgs/2-1.png'),
            change_num:1
        }

    };
    change(event){
        let change_num=event.target.getAttribute('data-change_num');
        this.setState({
            change_num:change_num
        })
    }


    render() {
        return (
            <div className='zuopin'>
                <Search placeholder='搜一搜设计师/作品'/>
                <div className="zuopin_2">
                    <div onClick={this.change.bind(this)} data-change_num='1' className={[this.state.change_num==1 ? "changecolor":'changecolor2',''].join(' ')}>美容</div>
                    <div data-change_num='2'  onClick={this.change.bind(this)} className={[this.state.change_num==2 ? "changecolor":'changecolor2',''].join(' ')}>美发</div>
                    <div data-change_num='3'  onClick={this.change.bind(this)} className={[this.state.change_num==3 ? "changecolor":'changecolor2',''].join(' ')}>美装</div>
                    <div data-change_num='4'  onClick={this.change.bind(this)} className={[this.state.change_num==4? "changecolor":'changecolor2',''].join(' ')}>美甲</div>
                </div>
                <Goods/>
                <Foot iszuopin={true}/>
            </div>
        );
    }
}

export default Login;
