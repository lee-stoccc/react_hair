import React, { Component } from 'react';
import './alert.css'

class Alert extends Component {
    constructor(props){
        super(props);

    };
    render() {

        const unshow={'display':'none'};
        const show={'display':''}


        return (
            <div className={'Alert'} style={this.props.isShow?show:unshow} >
                    <div className={'Alert_text'}>
                        {this.props.Alert_text}
                    </div>
                    <div  className={'Alert_text_2'}>
                        {this.props.alert_text_detail}
                    </div>
                    <div  className={'Alert_text_line'}></div>
                <div  className={'Alert_text_3'}>
                    <div  onClick={this.props.alert_cencel}>取消</div>
                    <div onClick={this.props.alert_sure}>确定</div>
                </div>
            </div>
        );
    }
}

export default Alert;
