import React, { Component } from 'react';
import './goods.css'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';

class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            src:[require('../../staic/imgs/2-1.png'),require('../../staic/imgs/youjiantou.png')],
        }
    }




    render() {
        const Img_text_2_text=['text'];
        Img_text_2_text.push(this.props.text_2);
        const goPaths=this.props.goPath?'/'+this.props.goPath:"/mall";
        const bg={
            backgroundImage:'url(../../staic/imgs/2-1.png)',
            backgroundPosition:'center'
            // backgroundImage: `url(${require("../../staic/imgs/2-1.png")})`
        };
        return (
            <div className='goods' onClick={this.props.goodDetail}>
                            {/*路由跳转路径  +  路由带参数*/}
                <Link to={{pathname:goPaths,data:{cid:this.props.cid,id:this.props.id}}}>
                    <div><img src={this.state.src[0]} alt=""/></div>
                    <div>{this.props.goodname}</div>
                    <div>￥{this.props.goodprice}</div>
                </Link>
            </div>
        );
    }
}

export default Input;
