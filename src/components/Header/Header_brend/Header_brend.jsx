import React from 'react'
import '../Header_brend/Header_brend.scss'

const Header_brend = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header_top">
                        <p><a href="/">Главная</a> / О компании</p>
                        <h1>Бренды</h1>
                        <div className="header__brend_page_all">
                            <ul>
                                <li><p>2</p></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header_brend