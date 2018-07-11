import React from 'react';
import ReactSwiper from 'reactjs-swiper';
import './swiper.css'

export default class Img_text extends React.Component {
    constructor(props){
        super(props);
        this.state={
            src:[
                {image:require('../../staic/imgs/swiper01.jpg')},
                {image:require('../../staic/imgs/swiper02.jpg')}
                ]

        }
    }

    render() {
        const swiperOptions = {
            preloadImages: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false
        };

        return (
                     <ReactSwiper swiperOptions={swiperOptions} showPagination items={this.state.src}/>
        )
    }
}
