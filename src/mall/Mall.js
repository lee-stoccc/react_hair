import React, { Component } from 'react';
import ImgText from '../components/com/Img_text'
import Search from '../components/search/Search'
import Swiper from '../components/swiper/Swiper'
import Foot from '../components/footer/Footer'
import Goods from '../components/goods/Goods'
import './mall.css'


class Mall extends React.Component {
    state={
        imgsrc:[require('../staic/imgs/2-1.png'),require('../staic/imgs/2-2.png')],
    };


    render() {
        return (
            <div >
                <Search placeholder='搜一搜好货'/>
                <Swiper />
                <div className='index_chodis'>
                    <ImgText imgtext={'化妆品'} imgsrc={this.state.imgsrc[0]}/>
                    <ImgText imgtext={'护肤品'} imgsrc={this.state.imgsrc[1]} />
                    <ImgText imgtext={'美发用品'} imgsrc={this.state.imgsrc[0]} />
                    <ImgText imgtext={'美甲用品'} imgsrc={this.state.imgsrc[1]}/>
                </div>
                <div  className='Login_1'>
                    <div className='line'></div>
                    <div className='Login_1_2'>精品推荐</div>
                </div>
                <div className="mall_goods">
                    <Goods/>
                    <Goods/>
                </div >

                <Foot/>
            </div>
        );
    }
}

export default Mall;
