import React, { Component } from 'react';
import ImgText from '../components/com/Img_text'
import Search from '../components/search/Search'
import Swiper from '../components/swiper/Swiper'
import Foot from '../components/footer/Footer'
import Goods from '../components/goods/Goods'
import './mall.css'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';


class Mall extends React.Component {
    state={
        imgsrc:[require('../staic/imgs/mall_1.jpg'),require('../staic/imgs/mall_2.jpg'),require('../staic/imgs/mall_3.jpg')
            ,require('../staic/imgs/mall_4.png'),require('../staic/imgs/mall_5.png')],
        malllist:[]
    };
    componentWillMount(){
        var t=this;
        this.$axios({
            url:'/index/Goodc/goodlists',
            method:'GET',
            params:{cid:1}
        }).then(function (res) {
            t.setState({
                malllist:res.data
            })
        })
    }



    mall_goUrl(paths,par){
        this.props.history.push({pathname:`${paths}`,state:par});
        console.log(22)
    }
    render() {
        return (
            <div >
                <Search placeholder='搜一搜好货'/>
                <Swiper />
                <div className='index_chodis'>
                    <ImgText imgtext={'化妆品'} imgsrc={this.state.imgsrc[0]} />
                    <ImgText imgtext={'护肤品'} imgsrc={this.state.imgsrc[1]} />
                    <ImgText imgtext={'美发用品'} imgsrc={this.state.imgsrc[0]} />
                    <ImgText imgtext={'美甲用品'} imgsrc={this.state.imgsrc[1]}/>
                </div>
                <div  className='Login_1'>
                    <div className='line'></div>
                    <div className='Login_1_2'>精品推荐</div>
                </div>
                <div className="mall_goods">
                    <Goods key={1} goodname={'百雀羚'} goodprice={'$199'} goPath={'gooddetail'} cid={1} id={1} imgsrc={this.state.imgsrc[0]}/>
                    <Goods key={1} goodname={'兰芝（LANEIGE）'} goodprice={'$49'} goPath={'gooddetail'} cid={1} id={2} imgsrc={this.state.imgsrc[1]}/>
                    <Goods key={1} goodname={'科颜氏（Kiehl\'s）'} goodprice={'$59'} goPath={'gooddetail'} cid={1} id={3} imgsrc={this.state.imgsrc[2]}/>
                    <Goods key={1} goodname={'玉兰油OLAY'} goodprice={'$69'} goPath={'gooddetail'} cid={1} id={4} imgsrc={this.state.imgsrc[3]}/>
                    <Goods key={1} goodname={'SK-II嫩肤清莹露'} goodprice={'$99'} goPath={'gooddetail'} cid={1} id={5} imgsrc={this.state.imgsrc[4]}/>


                </div >
                <Foot ismall={true}/>
            </div>
        );
    }
}

export default Mall;
