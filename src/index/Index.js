import React, { Component } from 'react';
import ImgText from '../components/com/Img_text'
import Shop_template from '../components/shop_template/Shop_template'
import Search from '../components/search/Search'
import Swiper from '../components/swiper/Swiper'
import Buttom from '../components/buttom/Bottom'
import Foot from '../components/footer/Footer'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import './index.css'


class Index extends React.Component {
    state={
        imgsrc:[require('../staic/imgs/2-1.png'),require('../staic/imgs/2-2.png')],
        indexInfo:{},
        shoplist:[]
    };

    componentWillMount () {
        var t=this;
       this.$axios({
           method:'get',
           url:'/index/Hairindexc/index',
           params:{cid:1}
       }).then(function (res) {
           t.setState({
               indexInfo:res.data,
               one:res.data.lanmu.one,
               two:res.data.lanmu.two,
               three:res.data.lanmu.three,
               four:res.data.lanmu.four
           })
       });
        this.$axios({
            method:'get',
            url:'/index/Hairshopc/shoplist',
            params:{cid:1}
        }).then(function (res) {
           t.setState({
               shoplist:res.data
           })
        })

    };

    render() {
        const marbottom={
            marginBottom:'5rem'
        };
        return (
            <div >
                <Search placeholder='搜一搜'/>
                <Swiper />
                <div className='index_chodis'>
                    <ImgText imgtext={this.state.one} imgsrc={this.state.imgsrc[0]}/>
                    <ImgText imgtext={this.state.two} imgsrc={this.state.imgsrc[1]} />
                    <ImgText imgtext={this.state.three} imgsrc={this.state.imgsrc[0]} />
                    <ImgText imgtext={this.state.four} imgsrc={this.state.imgsrc[1]}/>
                </div>

                <Router>
                    <Route path='/index/fot' component={Swiper}/>
                </Router>
                <div style={marbottom}>
                    {
                        this.state.shoplist.map((l,key)=>{
                            return  <div className='index_1' key={key}>
                                <Buttom button='预约' button_1='index_yuyue'/>
                                <Shop_template shopname={l.shopname} shopcarenum={l.shopcarenum} />
                            </div>
                        })
                    }
                    </div>
                <Foot />
            </div>
        );
    }
}

export default Index;
