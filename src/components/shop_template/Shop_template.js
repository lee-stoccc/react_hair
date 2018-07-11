import React, { Component } from 'react';
import './Shop_template.css'
import Btn from '../buttom/Bottom'


class Shop_template extends React.Component {

    render() {
        return (
            <div className='s_t' >
                    <div className='s_t_1'></div>
                    <div className='s_t_2'></div>
                    <div className='s_t_3'><img src={require('../../staic/imgs/2-1.png')} alt=""/></div>
                    <div className='s_t_4'> {this.props.shopname}</div>
                    <div className='s_t_5'><Btn /></div>
                    <div className='s_t_6'>
                        <div><img src={require('../../staic/imgs/2-1.png')} alt=""/></div>
                        <div>关注人数:</div>
                        <div className='people'>{this.props.shopcarenum}</div>
                    </div>
            </div>
        );
    }
}

export default Shop_template;
