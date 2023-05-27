import React, { useContext } from 'react'
import '../Header_menu/Header_menu.scss'
import { Context } from '../../../context';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Slider from "react-slick";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Header_menu = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 470,
        borderRadius: "10px",
        bgcolor: 'background.paper',
        boxShadow: 24,
        zIndex: 100,
    };

    const { _id } = useParams();

    const {
        data,
        open1,
        open2,
        handleOpen1,
        handleClose1,
        handleOpen2,
        handleClose2,
        setAge,
        setAge1,
        age,
        age1,
    } = useContext(Context);



    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChange1 = (event) => {
        setAge1(event.target.value);
    };


    const { updateItemQuantity, items, isEmpty, getItem, addItem, removeItem } = useCart()

    const sana = new Date;

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <header>
                <div className="container">
                {data?.filter((el) => el?._id === _id).map((el) => {
                        return (
                            <div className="menu_top" key={el?._id}>
                                <p><a href="/">Главная </a>/ <a href="/telefon_gadjet_aksessuar">Телефоны</a> / {el.desc}</p>
                                <h1>{el.desc}</h1>
                                <div className="star">
                                    <b>КОД: <span>{el.code}</span></b>
                                </div>
                                <div className="menu__all">
                                    <div className="menu__left">
                                        <div className='product__slider'>
                                            <Slider {...settings}>
                                                <div>
                                                    <img src={el.image1} alt="" className='img__small' />
                                                </div>
                                                <div>
                                                    <img src={el.image2} alt="" className='img__small' />
                                                </div>
                                                <div>
                                                    <img src={el.image3} alt="" className='img__small' />
                                                </div>
                                            </Slider>
                                        </div>
                                        <div className="img__big">
                                            <img src={el.image1} alt="" />
                                            <img src={el.image2} alt="" />
                                            <img src={el.image3} alt="" />
                                        </div>
                                    </div>
                                    <div className="menu__center">
                                        <ul>
                                            <li><b>Гарантия:</b> {el.guarantee}</li>
                                            <li><b>Производитель:</b> {el.manufacturer}</li>
                                        </ul>
                                        <bdi>Цвет: <span>{el.color}</span></bdi>
                                        <div className="menu_icon_all">
                                            <div className="menu__icon_1">
                                                <img src={el.image1} alt="" />
                                                <i className='fa-solid fa-check'></i>
                                            </div>
                                        </div>
                                        <b>Встроенная память:</b>
                                        <br />
                                        <select name="" id="" style={{ marginTop: "10px", width: "100px", height: "40px", boxShadow: "0 0 0 2px rgba(69, 69, 69, 0.15)", padding: "4px", borderRadius: "8px" }}>
                                            <option value="">{el.storage1}</option>
                                        </select>
                                        <br />
                                        <br />
                                        <b>Оперативная память:</b>
                                        <br />
                                        <div className="menu__icon_3">
                                            <h5>{el.ram1}</h5>
                                            <i className='fa-solid fa-check'></i>
                                        </div>
                                        <p><b>Вибрация</b><span>{el.vibration}</span></p>
                                        <p><b>Количество SIM-карт</b><span>{el.sim_cards}</span></p>
                                        <p><b>Материал корпуса</b><span>{el.material}</span></p>
                                        <p><b>Операционная система</b><span>{el.sistemi}</span></p>
                                        <p><b>Степень защиты</b><span>{el.protection}</span></p>
                                        <p><b>Тип SIM-карты</b><span>{el.sim_typ}</span></p>
                                        <p><b>Brend</b><span>{el.brend}</span></p>
                                        <div className="location">
                                            <b>Наличие в магазинах: <span><i className="fa-solid fa-location-arrow"></i> Ташкент</span></b><br />
                                            <bdi><a href=""><i className="fa-solid fa-cart-flatbed"></i> <span>В наличии</span></a> в 2 магазинах</bdi>
                                        </div>
                                    </div>
                                    <div className="menu__right">
                                        <div className="right__top">
                                            <div className="left">
                                                <b>{el.price1} UZS</b>
                                                <p>{el.month} сум/мес.</p>
                                                <bdi><span>{el.price2}</span> UZS</bdi>
                                                <span><i className="fa-solid fa-check"></i> В наличии</span>
                                            </div>
                                            <div className="right">
                                                <img src={el.logo} alt="" />
                                            </div>
                                        </div>
                                        <div className="right__center">
                                            <div className="menu__shop">
                                                <button onClick={() => updateItemQuantity(el._id, items.length--)}>
                                                    -
                                                </button>
                                                <span>{items.length}</span>
                                                <button onClick={() => updateItemQuantity(el._id, items.length++)}>
                                                    +
                                                </button>
                                            </div>
                                            {!getItem(el._id) ? (
                                            <>
                                                <button className="shop__cart" onClick={() => addItem({ ...el, id: el._id, price: el.price1 })}>
                                                    <a href="">
                                                        <i className="fa-solid fa-cart-arrow-down"></i>В корзину
                                                    </a>
                                                </button>
                                            </>
                                            ) : (
                                            <>
                                                <button className="shop__cart" onClick={() => removeItem(el._id)}>
                                                    <a href="">
                                                        <i className="fa-solid fa-cart-arrow-down"></i>Удалить
                                                    </a>
                                                </button>
                                            </>
                                            )}
                                        </div>
                                        <div className="right__bottom">
                                            <button className='button__shop' style={{ height: "48.4px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                                <Button onClick={handleOpen1}>Купить в один клик</Button>
                                                <Modal
                                                    open={open1}
                                                    onClose={handleClose1}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ background: "#007AFF", color: "#FFF", padding: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                            Купить в один клик
                                                            <i className="fa-solid fa-xmark" onClick={handleClose1} style={{ fontSize: "35px" }}></i>
                                                        </Typography>
                                                        <Typography>
                                                            <div className="top" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "20px" }}>
                                                                <img src={el.image1} alt="" style={{ width: "150px", height: "150px" }} />
                                                                <h1 style={{ fontSize: "24px", color: '#1e1e1e' }}>{el.desc}</h1>
                                                            </div>
                                                            <div className="center" style={{ padding: "20px" }}>
                                                                <p style={{ padding: "6px 0", fontWeight: "bold" }}>Ваше имя</p>
                                                                <input type="text" style={{ minHeight: "40px", borderRadius: "6px", borderColor: "#d5d5d5", outline: "none", background: "#FFF", width: "100%", paddingLeft: "10px" }} />
                                                                <p style={{ padding: "6px 0", fontWeight: "bold" }}>Телефон</p>
                                                                <input type="text" style={{ minHeight: "40px", borderRadius: "6px", borderColor: "#d5d5d5", outline: "none", background: "#FFF", width: "100%", paddingLeft: "10px" }} />
                                                                <b style={{ display: "flex", justifyContent: "center", paddingTop: "10px", fontWeight: "normal" }}>- Или -</b>
                                                                <p style={{ padding: "6px 0", fontWeight: "bold" }}>E-mail</p>
                                                                <input type="text" style={{ minHeight: "40px", borderRadius: "6px", borderColor: "#d5d5d5", outline: "none", background: "#FFF", width: "100%", paddingLeft: "10px" }} />

                                                            </div>
                                                            <div className="bottom" style={{ background: "#f6f6f6", padding: "20px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                                                                <button style={{ background: "#006fe7", borderRadius: "6px", color: "#FFF", border: 'none', boxShadow: "inset 0 -2px 0 0 #0a5cb5", padding: "10px 15px", fontSize: "14px" }} onClick={handleClose1}>Отправить </button>
                                                            </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </button>
                                            <button className='button__rassrochka'>
                                                <Button onClick={handleOpen2} style={{ color: '#fff' }}><span>% </span> В рассрочку
                                                </Button>
                                                <Modal
                                                    open={open2}
                                                    onClose={handleClose2}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style} style={{ width: "870px" }} className='rassrochka__card__all'>
                                                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ background: "#007AFF", color: "#FFF", padding: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                            Выберите рассрочку!
                                                            <i className="fa-solid fa-xmark" onClick={handleClose2} style={{ fontSize: "35px" }}></i>
                                                        </Typography>
                                                        <Typography className='rassrochka__card__bottom' >
                                                            <ul>
                                                                <li>
                                                                    <img src={el.image1} alt="" />
                                                                </li>
                                                                <li>
                                                                    <p>{el.desc}</p>
                                                                    <b>{el.price1} UZS</b>
                                                                </li>
                                                            </ul>
                                                            <div className="rassrochka__card" >
                                                                <div className="select__top" >
                                                                    <div className="select__top__card">
                                                                        <p ></p>
                                                                        <img src="https://elmakon.uz/images/logos/8/elmakon.png" alt="" />
                                                                    </div>
                                                                    <select
                                                                        value={age1}
                                                                        className='select__border'
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <option value="">12 месяцев</option>
                                                                        <option value={10}>9 месяцев</option>
                                                                        <option value={20}>6 месяцев</option>
                                                                        <option value={30}>4 оплаты (без %)</option>
                                                                    </select>
                                                                    <select className='price__month'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <option value="">{el.month} UZS / месяц</option>
                                                                        <option value={10}>{el.month + 124000} UZS / месяц</option>
                                                                        <option value={20}>{el.month + 374000} UZS / месяц</option>
                                                                        <option value={30}>{el.month + 575000} UZS / месяц</option>
                                                                    </select>
                                                                </div>
                                                                <div className="select__bottom">
                                                                    <select
                                                                        className='select__desc'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <option value="">Первоначальный взнос</option>
                                                                        <option value={10}>Первоначальный взнос</option>
                                                                        <option value={20}>Первоначальный взнос</option>
                                                                        <option value={30}>Первоначальный взнос</option>
                                                                    </select>
                                                                    <select className='price__month'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <p></p>
                                                                        <option value="">0 UZS</option>
                                                                        <option value={10}>0 UZS</option>
                                                                        <option value={20}>0 UZS</option>
                                                                        <option value={30}>{el.month + 575000} UZS</option>
                                                                    </select>
                                                                </div>
                                                                <div className="select__bottom">
                                                                    <select
                                                                        className='select__desc'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <option value="">Срок рассрочки</option>
                                                                        <option value={10}>Срок рассрочки</option>
                                                                        <option value={20}>Срок рассрочки</option>
                                                                        <option value={30}>Оплаты</option>
                                                                    </select>
                                                                    <select className='price__month'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <p></p>
                                                                        <option value="">12 месяцев</option>
                                                                        <option value={10}>9 месяцев</option>
                                                                        <option value={20}>6 месяцев</option>
                                                                        <option value={30}>4 оплаты (без %)</option>
                                                                    </select>
                                                                </div>
                                                                <div className="select__bottom">
                                                                    <select
                                                                        className='select__desc'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <option value="">Ежемесяцная оплата</option>
                                                                        <option value={10}>Ежемесяцная оплата</option>
                                                                        <option value={20}>Ежемесяцная оплата</option>
                                                                        <option value={30}>Ежемесяцная оплата</option>
                                                                    </select>
                                                                    <select className='price__month'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <p></p>
                                                                        <option value="">{el.month} UZS / месяц</option>
                                                                        <option value={10}>{el.month + 124000} UZS / месяц</option>
                                                                        <option value={20}>{el.month + 374000} UZS / месяц</option>
                                                                        <option value={30}>{el.month + 575000} UZS / месяц</option>
                                                                    </select>
                                                                </div>
                                                                <div className="select__bottom">
                                                                    <select
                                                                        className='select__desc'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <option value="">Общая сумма оплаты</option>
                                                                        <option value={10}>Общая сумма оплаты</option>
                                                                        <option value={20}>Общая сумма оплаты</option>
                                                                        <option value={30}>Общая сумма оплаты</option>
                                                                    </select>
                                                                    <select className='price__month'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <p></p>
                                                                        <option value="">{el.month * 12} UZS</option>
                                                                        <option value={10}>{(el.month + 124000) * 9} UZS</option>
                                                                        <option value={20}>{(el.month + 374000) * 6} UZS</option>
                                                                        <option value={30}>{(el.month + 575000) * 4} UZS</option>
                                                                    </select>
                                                                </div>
                                                                <div className="select__bottom select__backgraund">
                                                                    <select
                                                                        className='select__desc'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <option value="">Дата завершения рассрочки</option>
                                                                        <option value={10}>Дата завершения рассрочки</option>
                                                                        <option value={20}>Дата завершения рассрочки</option>
                                                                        <option value={30}>Дата завершения рассрочки</option>
                                                                    </select>
                                                                    <select className='price__month'
                                                                        value={age1}
                                                                        onChange={handleChange1}
                                                                        displayEmpty
                                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                                    >
                                                                        <p></p>
                                                                        <option value="">{sana.getDate()}.0{sana.getMonth(0) + 1}.{sana.getFullYear() + 1}</option>
                                                                        <option value={10}>{sana.getDate()}.0{sana.getMonth(0) - 2}.{sana.getFullYear() + 1}</option>
                                                                        <option value={20}>{sana.getDate()}.{sana.getMonth(0) + 7}.{sana.getFullYear()}</option>
                                                                        <option value={30}>{sana.getDate()}.0{sana.getMonth(0) + 5}.{sana.getFullYear()}</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="rassrochka__link">
                                                                <a href="/cart/" onClick={() => addItem({ ...el, id: el._id, price: el.price1 })}>Оформить рассрочку</a>
                                                            </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </button>
                                            <div className="bottom__contact">
                                                <b>Продавец: <a href="">ELMAKON</a></b>
                                                <img src="https://elmakon.uz/images/thumbnails/80/80/logos/9/elmakon_fgf3-dw.png" alt="" />
                                                <p><i className="fa-solid fa-headset"></i> +998-71-203-1203</p>
                                                <p><i className="fa-solid fa-clipboard-question"></i> Задать вопрос</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </header>
        </>
    )
}

export default Header_menu