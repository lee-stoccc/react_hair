import React, { Component } from 'react';
import Img_text from '../com/Img_text'
import history from './history';
import { NavLink ,Link} from 'react-router-dom';

import './footer.css'


class Mall extends React.Component {
    state={
        imgsrc:[require('../../staic/imgs/2-1.png'),require('../../staic/imgs/2-2.png')],
    };

    footer_goUrl(paths,par){
        this.props.history.push({pathname:`${paths}`,state:par});
        console.log(22)
    }

    render() {
        return (
            <div className='footer'>
                <Img_text imgsrc={this.state.imgsrc[0]} imgtext='首页' goPath='index'/>
                <Img_text imgsrc={this.state.imgsrc[0]} imgtext='商城' goPath='mall'/>
                <Img_text imgsrc={this.state.imgsrc[0]} imgtext='作品' goPath='zuopin'/>
                <Img_text imgsrc={this.state.imgsrc[0]} imgtext='我的' goPath='mine' />
            </div>
        );
    }
}

export default Mall;
