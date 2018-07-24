import React, { Component } from 'react';
import './app_header.css'

class App_header extends Component {
    constructor(props){
        super(props);

    };
    goBack(){
        window.history.go(-1)
    }

    render() {
        return (
                <header className={'App_header'}>
                    <div onClick={this.goBack.bind(this)}>
                        <img src={require('../../staic/imgs/left.png')} alt=""/>
                    </div>
                    <div>
                        {this.props.headname}
                    </div>
                </header>
        );
    }
}

export default App_header;
