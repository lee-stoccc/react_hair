import React, { Component } from 'react';
import ImgText from '../components/com/Img_text'
import Shop_template from '../components/shop_template/Shop_template'
import Search from '../components/search/Search'
import Swiper from '../components/swiper/Swiper'
import Buttom from '../components/buttom/Bottom'
import Foot from '../components/footer/Footer'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import Appheader from '../components/app_header/App_header'
import Alert from '../components/alert/Alert'
import './shopdetail.css'


class Shopdetail extends React.Component {
    constructor(props,contexxt){
        super(props);
        this.state={
            shopdetail:{},
            change_num:1,
            designerlist:[''],
            alert_show:false,
            imgsrc:[require('../staic/imgs/2-1.png'),require('../staic/imgs/2-2.png')],
        };
    }

    change(event){
        let change_num=event.target.getAttribute('data-change_num');
        this.setState({
            change_num:change_num
        })
    }
    componentWillMount () {
        // 获得路由跳转带过来的参数
        let params=this.props.match.params;
        console.log(params);
        let t=this;
        // 查询店铺详细信息
        this.$axios({
            method:'get',
            url:'/index/Hairshopc/shopdetail',
            params:{cid:this.__proto__.__proto__.CID,shopid:params.id}
        }).then(function (res) {
            t.setState({
                shopdetail:res.data
            })
        });
        // 查询店铺的设计师列表
        this.$axios({
            method:'get',
            url:'/index/Hairdesignerc/designer',
            params:{cid:this.__proto__.__proto__.CID,shopid:params.id}
        }).then(function (res) {
            t.setState({
                designerlist:res.data
            })
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
    // 关注
    addcarenum(shopid,shopcarenum,event){
        event.stopPropagation();
        var t=this;
        this.$axios({
            url:'/index/Hairshopc/saveusecareshop',
            params:{cid:t.CID,uid:t.UID,shopid:shopid},
            method:'get'
        }).then(function (res) {
            if(res.data.msg===true){
                let data=Object.assign(t.state.shoplist[shopid-1],{shopcarenum:shopcarenum+1},{uid:1});
                t.setState({
                    datas:data
                })
            }else {
                let data=Object.assign(t.state.shoplist[shopid-1],{shopcarenum:shopcarenum-1},{uid:-9999});
                t.setState({
                    datas:data
                })
            }
        })
    };

    render() {
        const marbottom={
            marginBottom:'5rem'
        };
        return (
            <div  className={'shopdetail'}>
                <Appheader headname={'店铺详情'}/>
                <Swiper/>
                <div className={'shopname'}>
                    <div><img src={this.state.imgsrc[0]} alt=""/></div>
                    <div>楚留香</div>
                    <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                </div>
                <div className="zuopin_2">
                    <div onClick={this.change.bind(this)} data-change_num='1' className={[this.state.change_num==1 ? "changecolor":'changecolor2',''].join(' ')}>设计师</div>
                    <div onClick={this.change.bind(this)} data-change_num='2' className={[this.state.change_num==2 ? "changecolor":'changecolor2',''].join(' ')}>产品套餐</div>
                </div>
                <div style={marbottom}>
                    {
                        this.state.designerlist.map((l,key)=>{
                            return  <div className='index_1' key={key} id={l.designerid}>
                                <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                                <Shop_template shopname={l.designername} shopcarenum={l.designertel}
                                               iscare={l.uid===1?true:false}
                                               shop_template_text='联系电话'
                                               addcarenumf={this.addcarenum.bind(this,l.shopid,l.designername)}
                                />

                            </div>
                        })
                    }
                </div>
                <Alert isShow={this.state.alert_show}
                       Alert_text={'预约'}
                       alert_text_detail={'预约当前设计师?'}
                       alert_cencel={this.alert_cencel.bind(this)}
                       alert_sure={this.alert_cencel.bind(this)}/>
            </div>
        );
    }
}

export default Shopdetail;
