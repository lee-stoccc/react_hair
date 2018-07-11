import React, { Component } from 'react';
import './buttom.css'


class Buttom extends React.Component {

    render() {
        const button_1=['order'];
        button_1.push(this.props.button_1);
        return (
                    <div className={button_1.join(" ")}> {this.props.button}</div>
        );
    }
}

export default Buttom;
