import React, { Component } from 'react';
import './search.css'


class Search extends React.Component {
    state={
        imgsrc:[require('../../staic/imgs/2-1.png'),require('../../staic/imgs/2-2.png')],
    };
    getValue(event){
        var t=this;
        let val= event.target.value;
        console.log(val);
        t.setState({
            value:event.target.value
        })
    }
    render() {
        return (
                <div className='top_search'>
                    <div className='t_s_1'><img src={this.state.imgsrc[0]} alt=""/></div>
                    <div className='t_s_3'><input type="text" placeholder={this.props.placeholder} onChange={this.getValue.bind(this)} value={this.state.value}/></div>
                    <div className='t_s_2'><img src={this.state.imgsrc[0]} alt=""/></div>
                </div>
        );
    }
}

export default Search;
