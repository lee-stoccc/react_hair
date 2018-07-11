import React, { Component } from 'react';
import './input.css'


class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            src:[require('../../staic/imgs/scanning.png')]
        }
    }


    render() {

        const input=['input'];
        input.push(this.props.input);
        return (
            <div className={input.join(" ")}>
               <div className='input_1'>
                   <img src={this.state.src[0]} alt=""/>
               </div>
                <div className='input_2'><input type="text" placeholder={this.props.placeholder}/></div>
            </div>
        );
    }
}

export default Input;
