import React, { Component } from 'react';
import ImgText from '../components/com/Img_text'
import Shop_template from '../components/shop_template/Shop_template'
import Search from '../components/search/Search'
import Swiper from '../components/swiper/Swiper'
import Buttom from '../components/buttom/Bottom'
import Foot from '../components/footer/Footer'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import Alert from '../components/alert/Alert'
import './index.css'


class Index extends React.Component {
    state={
        imgsrc:[require('../staic/imgs/2-1.png'),require('../staic/imgs/2-2.png')],
        indexInfo:{},
        shoplist:[],
        love:false,
        alert_show:false
    };

    componentWillMount () {
        var t=this;
       this.$axios({
           method:'get',
           url:'/index/Hairindexc/index',
           params:{cid:this.__proto__.__proto__.CID}
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
            params:{cid:this.__proto__.__proto__.CID}
        }).then(function (res) {
           t.setState({
               shoplist:res.data
           })
        })
    };

    // 关注
    addcarenum(shopid,shopcarenum,event){
        event.preventDefault();
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
    // 激活弹框
    alertShow(event){
        event.preventDefault();
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
                            return <Link to={`/shopdetail/${l.shopid}/${122}`}  key={key} >
                                <div className='index_1'id={l.shopid}>
                                    <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                                    <Shop_template shopname={l.shopname} shopcarenum={l.shopcarenum}
                                                   iscare={l.uid===1?true:false}
                                                   shop_template_text='关注人数'
                                                   addcarenumf={this.addcarenum.bind(this,l.shopid,l.shopcarenum)}
                                                  />
                                </div>
                            </Link>
                        })
                    }
                    </div>
                <Foot isindex={true}/>
                <Alert isShow={this.state.alert_show}
                       Alert_text={'预约'}
                       alert_text_detail={'预约当前设计师?'}
                       alert_cencel={this.alert_cencel.bind(this)}
                       alert_sure={this.alert_cencel.bind(this)}/>
            </div>
        );
    }
}

export default Index;
