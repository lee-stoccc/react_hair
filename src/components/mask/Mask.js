import React, { Component } from 'react';
import './mask.css'


class Mask extends Component {
    constructor(props){
        super(props);
        this.state={
            src:[require('../../staic/imgs/scanning.png')]
        }
    }


    render() {

        // const input=['input'];
        // input.push(this.props.input);
        return (
            <div className={this.props.maskShow ? 'box' : 'none'}>
            </div>
        );
    }
}

export default Mask;
