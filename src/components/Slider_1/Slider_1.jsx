import React from 'react'
import Slider from "react-slick";

const Slider_1 = () => {

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
            <Slider {...settings} className="slider__all">
                <div className="card__slider">
                    <a href="" >
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/39/1240x450_ru__4__at0u-xi.jpg" alt="" />
                    </a>
                </div>
                <div className="card__slider">
                    <a href="" >
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/39/1240x450_ru__4_.jpg" alt="" />
                    </a>
                </div>
                <div className="card__slider">
                    <a href="" >
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/38/1240x450_ru__4__7li2-i0.jpg" alt="" />
                    </a>
                </div>
                <div className="card__slider" >
                    <a href="" >
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/38/1240x450_vivo_ru.jpg" alt="" />
                    </a>
                </div>
                <div className="card__slider background__slider" >
                    <a href="">
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/39/1240x450_ru__4__wuy4-cu.jpg" alt="" />
                    </a>
                </div>
                <div className="card__slider background__slider" >
                    <a href="">
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/38/ru__3_.jpg" alt=""
                            style={{
                                width: "100%",
                                height: "450px",
                            }}
                        />
                    </a>
                </div>
                <div className="card__slider background__slider" >
                    <a href="">
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/38/Elmakon_1240x450_ru.jpg" alt="" />
                    </a>
                </div>
                <div className="card__slider background__slider">
                    <a href="">
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/38/1240_450_various_ru.png" alt="" />
                    </a>
                </div>
                <div className="card__slider background__slider" >
                    <a href="">
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/37/Elmakon_1240x450_ru.jpg" alt=""
                            style={{
                                width: "1240px"
                            }} />
                    </a>
                </div>
                <div className="card__slider background__slider" >
                    <a href="">
                        <img src="https://elmakon.uz/images/abt__ut2/banners/all/36/банер-для-сайта-версия-2.png" alt=""
                            style={{
                                width: "1240px"
                            }}
                        />
                    </a>
                </div>
            </Slider>
        </>
    )
}

export default Slider_1