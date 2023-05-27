import React from 'react';
import "../Adise_home/Aside_home.scss";

const Aside_home = () => {
    return (
        <>
            <aside className="aside__home">
                <div className="container">
                    <div className="home__top">
                        <h1>О компании</h1>
                        <p>Сайт, торгующий товарами в Интернете. Позволяет пользователям сформировать заказ на покупку, выбрать способ оплаты и доставки заказа в сети Интернет. Выбрав необходимые товары или услуги, пользователь обычно имеет возможность тут же на сайте выбрать метод оплаты и доставки.</p>
                        <p>Основное отличие Интернет-магазина от традиционного — в типе торговой площадки. Обычному магазину нужен торговый зал, витрины, ценники, а также продавцы, кассиры и опытные консультанты, у онлайн-магазина же вся инфраструктура реализована программно.</p>
                    </div>
                    <div className="home__bottom">
                        <div className="aside__home_card">
                            <h1>Оставайтесь на связи</h1>
                            <p>Подпишитесь на наши новости и будьте в курсе эксклюзивных акций!</p>
                            <form>
                                <input type="email" name="" id="" placeholder='E-mail' />
                                <button>Подписаться</button>
                            </form>
                        </div>
                        <div className="aside__home_card">
                            <h1>Присоединяйтесь!</h1>
                            <p>Вступайте к нам в группу <br /> и узнавайте первыми все акции и предложения!</p>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/Elmakon.uzbekistan">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/elmakonuz/">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/elmakon">
                                        <i className="fa-brands fa-telegram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@elmakon7377">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Aside_home