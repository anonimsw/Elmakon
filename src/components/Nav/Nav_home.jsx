import React, { useContext } from 'react';
import { Dropdown, ButtonToolbar } from 'rsuite';
import { Context } from '../../context';
import { useCart } from 'react-use-cart';
import '../Nav/Nav_home.scss';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Login from '../Login/Login';




const Nav_home = () => {

    const { dataSearch, mura, searchText, age, setAge } = useContext(Context);



    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const { items, isEmpty } = useCart();




    return (
        <>
            <header className="nav_home">
                <div className="header_home">
                    {/* <div className="top">
                        <div className="container">
                            <div className="top_all">
                                <div className="top_left">
                                    <ul>
                                        <li className='background'><a href=""><span>Скидки до 40%</span></a></li>
                                        <li><a href="">Статус рассрочки</a></li>
                                        <li><a href="">Cashback</a></li>
                                        <li><a href="">Samsung</a></li>
                                        <li><a href="">Xiaomi</a></li>
                                        <li><a href="">Адрес магазинов</a></li>
                                    </ul>
                                </div>
                                <div className="top_right">
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='selector_all'
                                        >
                                            <MenuItem value="" className='language'>
                                                <button>
                                                    <img src="https://flagicons.lipis.dev/flags/4x3/ru.svg" alt="" />

                                                    rus
                                                </button>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="bottom">
                        <div className="container">
                            <div className="bottom_all">
                                <div className="bottom_left">
                                    <a href="/">
                                        <img src="https://elmakon.uz/images/logos/8/elmakon.png" alt="" />
                                    </a>
                                    <ul>
                                        <li><a href="/telefon_gadjet_aksessuar/">Смартфоны</a></li>
                                        <li><a href="/noutbook">Ноутбуки</a></li>
                                        <li><a href="/televizor">Телевизоры</a></li>
                                        <a href="/avto">Авто товары</a>
                                    </ul>
                                </div>
                                <div className="bottom_right">
                                    {/* <div className="bottom_card">
                                        <a href="">
                                            <i className='fa-regular fa-heart'>
                                                <span></span>
                                                <p>Просмотреть список отложенных товаров</p>
                                            </i>
                                        </a>
                                        <a href="">
                                            <i className='fa-solid fa-chart-simple'>
                                                <span></span>
                                                <p>Просмотреть Список сравнения</p>
                                            </i>
                                        </a>
                                    </div> */}
                                    <ul>
                                        <li><a href="tel:+998-71-203-1203"><p>+998-71-203-1203</p></a></li>
                                        <li><a href=""><bdi>Заказать обратный звонок</bdi></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className='nav'>
                <div className="container">
                    <div className="nav_all">
                        <div className="nav_left">
                            <i className="fa-solid fa-bars"></i>
                            <ButtonToolbar>
                                <Dropdown title="Каталог товаров" className='bars_2'>
                                    <ul className='drop_menu' style={{ position: "absolute", left: "0.645rem" }}>
                                        <a href="/telefon_gadjet_aksessuar/">
                                            <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                                <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/iphone.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                                <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                    Телефоны
                                                    <br />
                                                    <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                        В этом разделе есть телефоны и сопутствующие товары.
                                                    </span>
                                                </p>
                                            </li>
                                        </a>
                                        <a href="/noutbook/">
                                            <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                                <img src="	https://elmakon.uz/images/abt__ut2/menu-with-icon/8/desktop-computer.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                                <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                    Ноутбуки
                                                    <br />
                                                    <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                        Компьютеры и устройства для дома и офиса
                                                    </span>
                                                </p>
                                            </li>
                                        </a>
                                        <a href="/televizor/">
                                            <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                                <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/home-cinema.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                                <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                    Телевизоры
                                                    <br />
                                                    <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                        Все техники для весело провести выходные.
                                                    </span>
                                                </p>
                                            </li>

                                        </a>
                                        {/* <a href="">
                                            <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                                <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/gaming-chair.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                                <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                    GAMING
                                                    <br />
                                                    <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                        Оригинальные устройства для геймеров
                                                    </span>
                                                </p>
                                            </li>
                                        </a>
                                        <a href="">
                                            <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                                <img src="	https://elmakon.uz/images/abt__ut2/menu-with-icon/8/washing-machine.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                                <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                    Бытовая техника
                                                    <br />
                                                    <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                        Техники облегчающие работу домохозяек
                                                    </span>
                                                </p>
                                            </li>
                                        </a>
                                        <a href="">
                                            <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                                <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/kitchen-appliance.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                                <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                    Техника для кухни
                                                    <br />
                                                    <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                        Техника для любителей готовить еду и десерты.
                                                    </span>
                                                </p>
                                            </li>
                                        </a> */}
                                    </ul>

                                </Dropdown>
                            </ButtonToolbar>

                            <Dropdown title="c" className='bars_1  fa-solid fa-bars'>
                                <ul className='drop_menu' style={{ position: "absolute", left: "0.645rem" }}>
                                    <a href="/telefon_gadjet_aksessuar/">
                                        <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                            <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/iphone.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                            <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                Телефоны, гаджеты, аксессуары
                                                <br />
                                                <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                    Все категории доступные в магазине
                                                </span>
                                            </p>
                                        </li>
                                    </a>
                                    <a href="/noutbook/">
                                        <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                            <img src="	https://elmakon.uz/images/abt__ut2/menu-with-icon/8/desktop-computer.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                            <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                Ноутбуки, принтеры, компьютеры, периферия
                                                <br />
                                                <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                    В этом разделе есть телефоны и сопутствующие товары.
                                                </span>
                                            </p>
                                        </li>
                                    </a>
                                    <a href="/televizor/">
                                        <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                            <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/home-cinema.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                            <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                                Телевизоры, аудио и фото-видео
                                                <br />
                                                <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                    Компьютеры и устройства для дома и офиса
                                                </span>
                                            </p>
                                        </li>
                                    </a>
                                    {/* <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                        <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/gaming-chair.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                        <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                            GAMING
                                            <br />
                                            <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                Оригинальные устройства для геймеров
                                            </span>
                                        </p>
                                    </li>
                                    <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                        <img src="	https://elmakon.uz/images/abt__ut2/menu-with-icon/8/washing-machine.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                        <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                            Бытовая техника
                                            <br />
                                            <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                Техники облегчающие работу домохозяек
                                            </span>
                                        </p>
                                    </li>
                                    <li style={{ background: "#fff", padding: "10px 20px", display: "flex", alignItems: "center" }}>
                                        <img src="https://elmakon.uz/images/abt__ut2/menu-with-icon/8/kitchen-appliance.png" alt="" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
                                        <p style={{ color: "#1e1e1e", fontSize: "14px", fontWeight: "700", }}>
                                            Техника для кухни
                                            <br />
                                            <span style={{ color: "#919191", fontWeight: "normal", fontSize: "12px" }}>
                                                Техника для любителей готовить еду и десерты.
                                            </span>
                                        </p>
                                    </li> */}
                                </ul>
                            </Dropdown>




                        </div>
                        <div className="search_all">
                            <div className="searchbar">
                                <input type="text"
                                    value={mura}
                                    onChange={searchText.bind(this)}
                                />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="card_all">
                                {mura === "" ? (
                                    null
                                ) : (
                                    dataSearch.map((el) => {
                                        return (
                                            <div className="card" key={el._id}>
                                                <img src={el.image1} alt="" />
                                                <div className="right">
                                                    <a href={`/menu/${el._id}`}>
                                                        <p>{el.desc}</p>
                                                    </a>
                                                    <ul>
                                                        <a href={`/menu/${el._id}`}>
                                                            <li>Артикул: {el.code}</li>
                                                        </a>
                                                        <li className='clsLabel'>Телефоны, гаджеты, аксессуары</li>
                                                    </ul>
                                                    <ul className='card_bottom'>
                                                        <li><b>{el.price1} UZS</b></li>
                                                        <li>
                                                            <a href={`/menu/${el._id}`} className='clsPages'>
                                                                <i className="fa-solid fa-cart-shopping"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        </div>
                        <div className="nav_right">
                            <div className="card_user card">
                                {!localStorage.getItem("access") ? (
                                    <>
                                        <Login />
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-regular fa-circle-user"></i>
                                        <b
                                            onClick={() => {
                                                window.localStorage.removeItem("access");
                                                window.location.reload();
                                            }}
                                        >
                                            Выйти
                                        </b>
                                    </>
                                )}
                            </div>
                            <a href='/cart' className="card_cartshop card">
                                <i className="fa-solid fa-cart-shopping">
                                    {isEmpty ?
                                        <span style={{ background: "white", color: "#a2a2a2", fontWeight: "normal" }}>
                                            0
                                        </span>
                                        :
                                        <span className='span'>
                                            {items.length}
                                        </span>
                                    }
                                </i>
                                <b>Корзина</b>
                            </a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Nav_home