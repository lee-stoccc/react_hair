import React, { Component } from 'react';
import './img_text_2.css'


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
        return (
            <div className='yuyue'>
                <div><img src={this.state.src[0]} alt=""/></div>
                <div className={Img_text_2_text.join(' ')}>{this.props.img_text2}</div>
                <div><img src={this.state.src[1]} alt=""/></div>
            </div>
        );
    }
}

export default Input;
