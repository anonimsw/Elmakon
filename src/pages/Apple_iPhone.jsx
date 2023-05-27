import React, { useContext } from 'react';
import Nav from '../components/Nav/Nav_home';
import Footer from '../components/Footer/Footer';
import { Context } from '../context';
import { useCart } from 'react-use-cart';

const Apple_iPhone = () => {


    const { newAppleIphone } = useContext(Context);
    const { isEmpty, addItem, getItem, removeItem } = useCart();



    return (
        <>
            <Nav />
            <header className="Header_product_all_pages">
                <div className="container">
                    <div className="product__background">
                    </div>
                    <div className="product__menu">
                        <div className="product__menu_top">
                            <h1>Смартфоны</h1>
                            <p><a href="/">Главная</a> / <a href="/telefon_gadjet_aksessuar/">Телефоны</a> / Apple iPhone</p>
                        </div>
                        <div className="product__menu_all">
                            <div className="product__menu_left">
                                <ul>
                                    <a href="/telefon_gadjet_aksessuar/samsung_galaxy">
                                        <li>Samsung</li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar">
                                        <li style={{
                                            background: "#EEE",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>
                                            Apple
                                            <span span style={{
                                                background: "#dc3a1a",
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "100%"
                                            }}></span>
                                        </li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/xiaomi_redmi">
                                        <li>Xiaomi</li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/tcl">
                                        <li>TCL</li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/alcatel">
                                        <li>Alcatel</li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/zte">
                                        <li>ZTE</li >
                                    </a>
                                </ul >
                            </div >
                            <div className="product__menu_right">
                                {newAppleIphone?.map((el) => {
                                    return (
                                        <div className="card_menu" key={el._id}>
                                            <a href={`/menu/${el._id}`}>
                                                <div className="card_img_all">
                                                    <div className="item">
                                                        <img src={el.image1} alt="" className='img1' />
                                                    </div>
                                                    <div className="item">
                                                        <img src={el.image2} alt="" className='img2' />
                                                    </div>
                                                    <div className="item">
                                                        <img src={el.image3} alt="" className='img3' />
                                                    </div>
                                                </div>
                                            </a>
                                            <a href={`/menu/${el._id}`}>{el.desc}</a>
                                            <p><span>{el.price2}</span> UZS</p>
                                            <b>{el.price1} UZS</b>
                                            <div className="btn__bottom">
                                                <button style={{ marginRight: "1rem" }}>{el.month} сум/мес.</button>
                                                {!getItem(el?._id) ? (
                                                    <button className='btn_cart' onClick={() => addItem({ ...el, id: el._id, price: el.price1, count: el.count })}>
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </button>
                                                ) : (
                                                    <button className='btn_cart' onClick={() => removeItem(el._id)}>
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                )}
                                                <button className='btn_percent'>
                                                    <i className="fa-solid fa-percent"></i>
                                                </button>
                                            </div>
                                            <ul >
                                                <li>
                                                    <p>Цвет</p>
                                                    <span>{el.color}</span>
                                                </li>
                                                <li>
                                                    <p>Встроенная память</p>
                                                    <span>{el.storage1}</span>
                                                </li>
                                                <li>
                                                    <p>Оперативная память</p>
                                                    <span>{el.ram1}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div >
                    </div >
                </div >
            </header >
            <Footer />
        </>
    )
}

export default Apple_iPhone