import React, { Component } from 'react';
import './gooddetail.css'
import Swiper from '../components/swiper/Swiper'
import Appheader from '../components/app_header/App_header'
import Img_text from '../components/com/Img_text'
import Alert from '../components/alert/Alert'
import Mask from '../components/mask/Mask'

class Gooddetail extends Component {
    constructor(props){
        super(props);
        this.state={
            imgsrc:[require('../staic/imgs/dianpu.png'),require('../staic/imgs/kefu.png'),require('../staic/imgs/love.png'),require('../staic/imgs/love2.png'),require('../staic/imgs/mall_4.png'),require('../staic/imgs/mall_5.png')],
            data:{},
            love:false,
            alert_show:false,
            alertTitle:'1111',
            alertTip:"2222"
        }
    }

    // componentWillMount(){
    //     // 接收路由带过来的参数
    //     let t=this
    //     console.log(this)
    //     console.log(this.props.location)
    //     this.$axios({
    //         url:'/index/Goodc/gooddetail',
    //         method:'get',
    //         params:{cid:this.props.location.data.cid,id:this.props.location.data.id}
    //         // params:{cid:t.CID,id:this.props.location.data.id}
    //     }).then(function (res) {
    //         t.setState({data:res.data})
    //     });
    //     // 查询是否收藏了此商品
    //     this.$axios({
    //         url:'/index/Goodc/isaddgood',
    //         method:'get',
    //         // params:{cid:this.props.location.data.cid,id:this.props.location.data.id}
    //         params:{cid:t.CID,
    //             uid:t.UID,
    //             goodid:this.props.location.data.id}
    //     }).then(function (res) {
    //         if(res.data.msg!=='未收藏此商品'){
    //             t.setState({
    //                 love:true
    //             })
    //         }
    //     })
    // }
    // 加入购物车/点击购买未付款
    addShopCar(status,alertTitle,alertTip){
        let t=this;
        this.alertShow(alertTitle,alertTip)
        // this.goodsAlert(alertTitle,alertTip)
        this.$axios({
            url:'/index/Hairorderc/addGoodCar',
            params:{cid:this.state.data.cid,goodsid:this.state.data.id,uid:t.UID,goodnum:2,status:status},
            method:'get'
        }).then(function (res) {
            console.log(res)
        })
    }
    //  购买商品（已付款）
    ordstatus_1(goodsid, alertTitle,alertTip){
        let t=this;
        this.goodsAlert( alertTitle,alertTip)
        this.$axios({
            url:'/index/Hairorderc/ordstatus_1',
            params:{cid:this.state.data.cid,goodsid:this.state.data.id,uid:t.UID,goodnum:2,status:1},
            method:'get'
        }).then(function (res) {
            console.log(res)
        })
    }

    // 弹框信息提示
    goodsAlert =( alertTitle,alertTip)=>{
        this.setState({
            alertTitle:alertTitle,
            alertTip:alertTip
        });
    };
    // 收藏商品
    addcarenum(goodid){
        let t=this;
        this.$axios({
            url:'/index/Goodc/saveusecareshop',
            params:{cid:t.CID,uid:t.UID,goodid:goodid},
            method:'get'
        }).then(function (res) {
            if(res.data.msg===true){
                t.setState({
                    love:true,
                    alert_show:false,
                    alertTitle:"收藏",
                    alertTip:'确定收藏宝贝吗？'
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
    alertShow(alertTitle,alertTip){
        document.documentElement.style.overflow="hidden";
        console.log(this)
        this.goodsAlert(alertTitle,alertTip)
        this.setState({
            alert_show:true
        })
    }
    // 取消弹窗
    alert_cencel(){
        document.documentElement.style.overflow=""
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
                    <div>{'SK-II嫩肤清莹露'}</div>
                    <div>$:{9.90}</div>
                </div>
                <div className={'gooddetail_goodsname2'}>
                    <div>销量 : {124}</div>
                    <div>{'SK-II嫩肤清莹露160ml（保湿补水 柔肤水）'}</div>
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
                              Img_text_onClick={this.alertShow.bind(this,'收藏','收藏此宝贝吗')}
                              foot_class={'gooddetail_footer_width'} classes={'gooddetail_footer_text'}/>
                    <div  className={'gooddetail_footer_1'}>
                        <div onClick={this.addShopCar.bind(this,5,"加入购物车","确定加入购物车吗")}>加入购物车</div>
                        <div onClick={this.addShopCar.bind(this,0,"购买","确定付款吗")}>立即购买</div>
                    </div>
                </div>
                <div onClick={this.ordstatus_1.bind(this,0)} className='gooddetaill_intro'>
                    <div className="gooddetail_pinjia2">商品名称：SK-II清莹露  &nbsp;&nbsp;   &nbsp;&nbsp;        &nbsp;&nbsp;   &nbsp;&nbsp;商品毛重：230.00g </div>
                    <div className="gooddetail_pinjia2">商品产地：日本  &nbsp;&nbsp;   &nbsp;&nbsp;              &nbsp;&nbsp;   &nbsp;&nbsp;  功效：补水，保湿，柔肤</div>
                    <div className="gooddetail_pinjia2">          分类：爽肤水产品       &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp; 产地：日本</div>
                    <div className='gooddetail_indro_pic'><img src={this.state.imgsrc[4]} alt=""/></div>
                     <div className='gooddetail_indro_pic'><img src={this.state.imgsrc[5]} alt=""/></div>
                </div>

                <Mask maskShow={this.state.alert_show}/>
                <Alert isShow={this.state.alert_show}
                       Alert_text={this.state.alertTitle}
                       alert_text_detail={this.state.alertTip}
                       alert_cencel={this.alert_cencel.bind(this)}
                       alert_sure={this.addcarenum.bind(this,this.state.data.id)}/>
            </div>
        );
    }
}

export default Gooddetail;
