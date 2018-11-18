import React from 'react';
import ReactSwiper from 'reactjs-swiper';
import './swiper.css'

export default class Img_text extends React.Component {
    constructor(props){
        super(props);
        this.state={
            src:[
                {image:require('../../staic/imgs/swiper01.jpg')},
                {image:require('../../staic/imgs/swiper03.jpg')},
                {image:require('../../staic/imgs/swiper04.jpg')},
                {image:require('../../staic/imgs/swiper05.jpg')},
                {image:require('../../staic/imgs/swiper06.jpg')},
                {image:require('../../staic/imgs/swiper02.jpg')}
                ]

        }
    }

    render() {
        const swiperOptions = {
            preloadImages: true,
            autoplay: 2300,
            autoplayDisableOnInteraction: false
        };

        return (
                     <ReactSwiper swiperOptions={swiperOptions} showPagination items={this.state.src}/>
        )
    }
}
