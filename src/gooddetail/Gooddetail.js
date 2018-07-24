import React, { Component } from 'react';
import './gooddetail.css'
import Swiper from '../components/swiper/Swiper'
import Appheader from '../components/app_header/App_header'

class Gooddetail extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }

    componentWillMount(){
        // 接收路由带过来的参数
        let t=this
        console.log(this)
        console.log(this.props.location)
        this.$axios({
            url:'/index/Goodc/gooddetail',
            method:'get',
            params:{cid:this.props.location.data.cid,id:this.props.location.data.id}
        }).then(function (res) {
            t.setState({data:res.data})
        })
    }
    // 加入购物车/点击购买未付款
    addShopCar(status){
        let t=this;
        this.$axios({
            url:'/index/Hairorderc/addGoodCar',
            params:{cid:this.state.data.cid,goodsid:this.state.data.id,uid:t.UID,goodnum:2,status:status},
            method:'get'
        }).then(function (res) {
            console.log(res)
        })
    }
    //  购买商品（已付款）
    ordstatus_1(goodsid){
        let t=this;
        this.$axios({
            url:'/index/Hairorderc/ordstatus_1',
            params:{cid:this.state.data.cid,goodsid:this.state.data.id,uid:t.UID,goodnum:2,status:1},
            method:'get'
        }).then(function (res) {
            console.log(res)
        })
    }

    render() {
        return (
            <div >
                <Appheader headname={'商品详情'}/>
                <Swiper />
                <div className={'gooddetail_goodsname'}>
                    <div>{this.state.data.goodname}</div>
                    <div>$:{this.state.data.goodprice}</div>
                </div>
                <div className={'gooddetail_goodsname2'}>
                    <div>销量 : {this.state.data.sales}</div>
                    <div>{this.state.data.candi}</div>
                </div>
                <div className={'gooddetail_line'}></div>
                <div className={'gooddetail_guige'}>
                    <p>选择规格</p>
                    <div>
                        <img src={require('../staic/imgs/right.png')} alt=""/>
                    </div>
                </div>
                <div className={'gooddetail_line'}></div>
                <div className={'gooddetail_pinjia'}>
                    <div>宝贝评价</div>
                    <div>全部评价</div>
                    <div><img src={require('../staic/imgs/right.png')} alt=""/></div>
                </div>
                <div className={'gooddetail_pinjia1'}>
                    <div><img src={require('../staic/imgs/2-1.png')} alt=""/></div>
                    <div>小名</div>
                </div>
                <div className={'gooddetail_pinjia2'}>东西收到了，用了感觉还不错，不是好用就行了</div>
                <div className={'gooddetail_line1'}></div>
                <div className={'gooddetail_text'}>产品详情</div>
                <p onClick={this.addShopCar.bind(this,5)}>加入购物车</p>
                <p onClick={this.addShopCar.bind(this,0)}>立即购买</p>
                <br/>
                <p onClick={this.ordstatus_1.bind(this,0)}>立即购买(已付款)</p>
            </div>
        );
    }
}

export default Gooddetail;
