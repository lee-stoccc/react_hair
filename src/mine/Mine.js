import React, { Component } from 'react';
import Buttom from '../components/buttom/Bottom'
import Img_text2 from '../components/img_text_2/Img_text_2'
import Img_text from '../components/com/Img_text'
import Foot from '../components/footer/Footer'
import './mine.css'


class Index extends React.Component {
    state={
        imgsrc:[require('../staic/imgs/2-1.png'),require('../staic/imgs/2-2.png')],
        ordstatus_0:''
    };

    componentWillMount(){
        let t=this;
        // 获取代付款的数量
        this.$axios({
            url:'/index/Hairorderc/ordstatus_0',
            params:{cid:t.CID,uid:t.UID,status:0},
            method:'get'
        }).then(function (res) {
           t.setState({
               ordstatus_0:res.data.num
           })
        })
    }

    render() {
        const bg={
            backgroundColor:'#eee',
            position:'relative',
            height:"8rem"
        };
        return (
            <div className='mine'>
                <div className='login_img_1'><img src={this.state.imgsrc[0]} alt=""/></div>
                <div className='mine_1'>
                    <div>Type somethig</div>
                    <Buttom button='Lv6' button_1='button_1'/>
                </div>
                <div style={bg}>
                    <div className="mine_order">
                        <div className='mine_2'>
                            <div>我的订单</div>
                            <div className="mine_order_2">更多订单</div>
                            <div  className="mine_order_2"><img src="" alt=""/>></div>
                        </div>
                        <div className='mine_line'></div>
                        <div  className='mine_3'>
                            <Img_text imgtext='待付款' imgsrc={this.state.imgsrc[0]} num={this.state.ordstatus_0}/>
                            <Img_text imgtext='待收货' imgsrc={this.state.imgsrc[0]}/>
                            <Img_text imgtext='待发货' imgsrc={this.state.imgsrc[0]}/>
                            <Img_text imgtext='待评价' imgsrc={this.state.imgsrc[0]}/>
                            <Img_text imgtext='售后' imgsrc={this.state.imgsrc[0]}/>
                        </div>
                    </div>
                </div>
                <div>
                    <Img_text2 img_text2='我的预约' text_2='text_2'/>
                    <div className='mine_line' ></div>
                    <Img_text2 img_text2='我的购物车' text_2='text_2'/>
                    <div className='mine_line'></div>
                    <Img_text2 img_text2='我的优惠券' text_2='text_2'/>
                    <div className='mine_line'></div>
                    <Img_text2 img_text2='我的会员卡' text_2='text_2'/>
                    <div className='mine_line'></div>
                    <Img_text2 img_text2='商家认证/管理' text_2='text_2'/>
                    <div className='mine_line'></div>
                </div>
                <Foot ismine={true}/>
            </div>
        );
    }
}

export default Index;
