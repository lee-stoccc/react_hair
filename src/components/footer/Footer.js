import React, { Component } from 'react';
import Img_text from '../com/Img_text'
import history from './history';
import { NavLink ,Link} from 'react-router-dom';

import './footer.css'


class Mall extends React.Component {
    state={
        imgsrcinde:[require('../../staic/imgs/inde.png'),require('../../staic/imgs/indee.png')],
        imgsrcmall:[require('../../staic/imgs/index.png'),require('../../staic/imgs/index2.png')],
        imgsrczuopin:[require('../../staic/imgs/zuopin.png'),require('../../staic/imgs/zuopin2.png')],
        imgsrcmine:[require('../../staic/imgs/mine.png'),require('../../staic/imgs/mine2.png')],
    };

    footer_goUrl(paths,par){
        this.props.history.push({pathname:`${paths}`,state:par});
        console.log(22)
    }

    render() {


        return (
            <div className='footer'>
                <Img_text imgsrc={this.props.isindex?this.state.imgsrcinde[1]:this.state.imgsrcinde[0]}
                          classes={this.props.isindex?'footercolor':''}
                          imgtext='首页' goPath='index'/>
                <Img_text imgsrc={this.props.ismall?this.state.imgsrcmall[1]:this.state.imgsrcmall[0]}
                          classes={this.props.ismall?'footercolor':''}
                          imgtext='商城' goPath='mall'/>
                <Img_text imgsrc={this.props.iszuopin?this.state.imgsrczuopin[1]:this.state.imgsrczuopin[0]}
                          classes={this.props.iszuopin?'footercolor':''}
                          imgtext='作品' goPath='zuopin'/>
                <Img_text imgsrc={this.props.ismine?this.state.imgsrcmine[1]:this.state.imgsrcmine[0]}
                          classes={this.props.ismine?'footercolor':''}
                          imgtext='我的' goPath='mine' />
            </div>
        );
    }
}

export default Mall;
