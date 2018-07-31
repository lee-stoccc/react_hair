import React, { Component } from 'react';
import './gooddetail.css'
import Swiper from '../components/swiper/Swiper'
import Appheader from '../components/app_header/App_header'
import Img_text from '../components/com/Img_text'
import Alert from '../components/alert/Alert'

class Gooddetail extends Component {
    constructor(props){
        super(props);
        this.state={
            imgsrc:[require('../staic/imgs/dianpu.png'),require('../staic/imgs/kefu.png'),require('../staic/imgs/love.png'),require('../staic/imgs/love2.png')],
            data:{},
            love:false,
            alert_show:false
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
            // params:{cid:t.CID,id:this.props.location.data.id}
        }).then(function (res) {
            t.setState({data:res.data})
        });
        // 查询是否收藏了此商品
        this.$axios({
            url:'/index/Goodc/isaddgood',
            method:'get',
            // params:{cid:this.props.location.data.cid,id:this.props.location.data.id}
            params:{cid:t.CID,
                uid:t.UID,
                goodid:this.props.location.data.id}
        }).then(function (res) {
            if(res.data.msg!=='未收藏此商品'){
                t.setState({
                    love:true
                })
            }
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

    // 收藏商品
    addcarenum(goodid){
        console.log(213123)
        let t=this;
        this.$axios({
            url:'/index/Goodc/saveusecareshop',
            params:{cid:t.CID,uid:t.UID,goodid:goodid},
            method:'get'
        }).then(function (res) {
            if(res.data.msg===true){
                t.setState({
                    love:true,
                    alert_show:false
                })
            }else {
                t.setState({
                    love:false,
                    alert_show:false
                })
            }
        })
    };

    // 激活弹框
    alertShow(){
        this.setState({
            alert_show:true
        })
    }
    // 取消弹窗
    alert_cencel(){
        this.setState({
            alert_show:false
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
                <div className={'gooddetail_footer'}>
                    <Img_text imgtext='' imgsrc={this.state.imgsrc[0]}
                              foot_class={'gooddetail_footer_width'} classes={'gooddetail_footer_text'}/>
                    <Img_text imgtext='' imgsrc={this.state.imgsrc[1]} foot_class={'gooddetail_footer_width'} classes={'gooddetail_footer_text'}/>
                    <Img_text imgtext='' imgsrc={this.state.love?this.state.imgsrc[2]:this.state.imgsrc[3]}
                              Img_text_onClick={this.alertShow.bind(this)}
                              foot_class={'gooddetail_footer_width'} classes={'gooddetail_footer_text'}/>
                    <div  className={'gooddetail_footer_1'}>
                        <div onClick={this.addShopCar.bind(this,5)}>加入购物车</div>
                        <div onClick={this.addShopCar.bind(this,0)}>立即购买</div>
                    </div>
                </div>
                <p onClick={this.ordstatus_1.bind(this,0)}>立即购买(已付款)</p>
                <Alert isShow={this.state.alert_show}
                       Alert_text={'收藏'}
                       alert_text_detail={'确定收藏宝贝?'}
                       alert_cencel={this.alert_cencel.bind(this)}
                       alert_sure={this.addcarenum.bind(this,this.state.data.id)}/>
            </div>
        );
    }
}

export default Gooddetail;
