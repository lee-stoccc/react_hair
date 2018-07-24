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
        imgsrc:[require('../staic/imgs/2-1.png'),require('../staic/imgs/2-2.png')],
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
                    {
                        this.state.malllist.map((l,key)=>{
                            return (
                                    <Goods key={key} goodname={l.goodname} goodprice={l.goodprice}
                                           // 路由跳转的路径，和携带的参数
                                           goPath={'gooddetail'} cid={l.cid} id={l.id}/>

                            )
                        })
                    }
                </div >
                <Foot ismall={true}/>
            </div>
        );
    }
}

export default Mall;
