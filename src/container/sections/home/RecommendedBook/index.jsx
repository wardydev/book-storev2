import React from 'react'
import Placeholder from '../../../../assets/images/placeholder.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecommendedBook() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={Placeholder} alt="" />
                </div>
                <div>
                    <img src={Placeholder} alt="" />
                </div>
                <div>
                    <img src={Placeholder} alt="" />
                </div>
            </Slider>
        </div>
    )
}
