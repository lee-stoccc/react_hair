import React, { Component } from 'react';
import './goods.css'


class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            src:[require('../../staic/imgs/2-1.png'),require('../../staic/imgs/youjiantou.png')]
        }
    }



    render() {
        const Img_text_2_text=['text'];
        Img_text_2_text.push(this.props.text_2);
        const bg={
            backgroundImage:'url(../../staic/imgs/2-1.png)',
            backgroundPosition:'center'
            // backgroundImage: `url(${require("../../staic/imgs/2-1.png")})`
        };
        return (
            <div className='goods'>
                <div><img src={this.state.src[0]} alt=""/></div>
                <div>朵拉朵上口红中国浅红色</div>
                <div>￥ 99.9</div>
            </div>
        );
    }
}

export default Input;
