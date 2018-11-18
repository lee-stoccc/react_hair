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
        imgsrc:[require('../staic/imgs/index_1.jpg'),require('../staic/imgs/index_2.jpg'),require('../staic/imgs/index_3.jpg'),require('../staic/imgs/index_4.jpg'),require('../staic/imgs/index_5.jpg')],
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
                    <ImgText imgtext={'美容'} imgsrc={this.state.imgsrc[4]}/>
                    <ImgText imgtext={'美发'} imgsrc={this.state.imgsrc[2]} />
                    <ImgText imgtext={'美妆'} imgsrc={this.state.imgsrc[3]} />
                    <ImgText imgtext={'美甲'} imgsrc={this.state.imgsrc[1]}/>
                </div>
                <div className='index_chodis'>
                    <ImgText imgtext={'纤体'} imgsrc={this.state.imgsrc[0]}/>
                    <ImgText imgtext={'护肤'} imgsrc={this.state.imgsrc[4]} />
                    <ImgText imgtext={'健康'} imgsrc={this.state.imgsrc[2]} />
                    <ImgText imgtext={'日用'} imgsrc={this.state.imgsrc[1]}/>
                </div>
                <Router>
                    <Route path='/index/fot' component={Swiper}/>
                </Router>
                <div style={marbottom}>
                    <Link to={`/shopdetail/1/${122}/${'杜丽莎美容'}`}  key={1} >
                        <div className='index_1' id={1}>
                              <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                               <Shop_template shopname={'杜丽莎美容'} shopcarenum={121}   iscare={1===1?true:false} shop_template_text='关注人数' imgsrc={this.state.imgsrc[0]}/>
                        </div>
                    </Link>

                    <Link to={`/shopdetail/1/${122}/${'芭比之恋'}`}  key={2} >
                        <div className='index_1' id={1}>
                            <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                            <Shop_template shopname={'芭比之恋'} shopcarenum={421}   iscare={1===1?true:false} shop_template_text='关注人数' imgsrc={this.state.imgsrc[1]}/>
                        </div>
                    </Link>

                    <Link to={`/shopdetail/1/${122}/${'马特美甲'}`}  key={13} >
                        <div className='index_1' id={1}>
                            <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                            <Shop_template shopname={'马特美甲'} shopcarenum={64}   iscare={1===1?true:false} shop_template_text='关注人数' imgsrc={this.state.imgsrc[2]}/>
                        </div>
                    </Link>

                    <Link to={`/shopdetail/1/${122}/${'慕斯美发'}`}  key={4} >
                        <div className='index_1' id={1}>
                            <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                            <Shop_template shopname={'慕斯美发'} shopcarenum={21}   iscare={1===1?true:false} shop_template_text='关注人数' imgsrc={this.state.imgsrc[3]}/>
                        </div>
                    </Link>

                    <Link to={`/shopdetail/1/${122}/${'卡夫卡'}`}  key={5} >
                        <div className='index_1' id={1}>
                            <Buttom button='预约' button_1='index_yuyue'  Buttom_func={this.alertShow.bind(this)}/>
                            <Shop_template shopname={'卡夫卡'} shopcarenum={131}   iscare={1===1?true:false} shop_template_text='关注人数' imgsrc={this.state.imgsrc[4]}/>
                        </div>
                    </Link>


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
