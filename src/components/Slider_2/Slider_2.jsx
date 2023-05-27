import React from 'react'
import Slider from "react-slick";

const Slider_2 = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000,
        pauseOnHover: true
    };

    return (
        <>
            <Slider {...settings} className="slider1">
                <a href="" className="slider__1">
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/30/1__11_.png" alt="" />
                    <p>Управляйте температурой в вашем доме самостоятельно!</p>
                </a>
            </Slider>
            <Slider {...settings} className="slider2" style={{
                position: "absolute",
                top: "0px",
                left: "24rem",
                width: "440px"
            }}>
                <a href="" className='slider__2 '>
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/37/banner_mi_11pro.jpg" alt="" />
                </a>
                <a href="" className='slider__2'>
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/37/honor_x8.jpg" alt="" />
                </a>
                <a href="" className='slider__2'>
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/37/redmi_10a.jpg" alt="" />
                </a>
            </Slider>
            <Slider {...settings} className="slider3">
                <a href="" className='slider__1'>
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/37/honor_band_6.jpg" alt="" />
                </a>
            </Slider>
            <Slider {...settings} className="slider4">
                <a href="" className='slider__1'>
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/22/printer.png" alt="" />
                </a>
                <a href="" className='slider__1'>
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/28/1__10_.png" alt="" />
                </a>
            </Slider>
            <Slider {...settings} className="slider5">
                <a href="">
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/37/mi_tv__2_.jpg" alt="" />
                </a>
                <a href="">
                    <img src="https://elmakon.uz/images/abt__ut2/banners/all/37/dyson__2_.jpg" alt="" />
                </a>
            </Slider>
        </>
    )
}

export default Slider_2