import React from 'react'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav_home'

const Zte = () => {
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
                            <p><a href="/">Главная</a> / <a href="/telefon_gadjet_aksessuar/">Телефоны</a> / ZTE</p>
                        </div>
                        <div className="product__menu_all">
                            <div className="product__menu_left">
                                <ul>
                                    <a href="/telefon_gadjet_aksessuar/samsung_galaxy">
                                        <li>
                                            Samsung
                                        </li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/apple_iphone">
                                        <li>
                                            Apple
                                        </li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/" >
                                        <li>Xiaomi</li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/tcl">
                                        <li>TCL</li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/alcatel">
                                        <li>Alcatel</li>
                                    </a>
                                    <a href="/telefon_gadjet_aksessuar/">
                                        <li style={{
                                            background: "#EEE",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            ZTE
                                            <span style={{
                                                background: "#dc3a1a",
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "100%"
                                            }}></span>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                            <div className="product__menu">
                                <p>В этой категории нет товаров</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default Zte