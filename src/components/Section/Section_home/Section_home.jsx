import React, { useContext } from 'react';
import "../Section_home/Section_home.scss";
import Slider from "react-slick";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Slider_1 from '../../Slider_1/Slider_1';
import Slider_2 from '../../Slider_2/Slider_2';
import { useParams } from 'react-router-dom';
import Bestsellers from '../../Bestsellers/Bestsellers';
import { Context } from '../../../context';
import { useCart } from 'react-use-cart';

const Section_home = () => {

    const { data } = useContext(Context);
    const newTv = data?.filter(el => el.category3 === "tv")
    const newPhone = data?.filter(el => el.category3 === "phone")
    const newAppleIphone = data?.filter(el => el.category1 === "Apple iPhone")
    const newNoutbook = data?.filter(el => el.category3 === "noutbook")
    const newAvto = data?.filter(el => el.category3 === "avto")



    const [value, setValue] = React.useState('one');

    const { isEmpty, addItem, getItem, removeItem } = useCart();


    const { _id } = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <section className="home__pages">
                <Slider_1 />
                <div className="container">
                    <div className="section__card_all">
                        <a href="/telefon_gadjet_aksessuar/" className='section__card phone'>
                            Смартфоны
                        </a>
                        {/* <a href="" className='section__card heaters'>
                            Обогреватели
                        </a>
                        <a href="" className='section__card kitchen'>
                            Техника для кухни
                        </a>
                        <a href="" className='section__card household'>
                            Бытовая <br /> техника
                        </a>
                        <a href="" className='section__card gaming'>
                            Gaming
                        </a> */}
                        <a href="/avto" className='section__card avto'>
                            Авто <br /> товары
                        </a>
                        <a href="/noutbook" className='section__card noutbook'>
                            Ноутбуки
                        </a>
                        <a href="/televizor" className='section__card tv'>
                            TV <br /> AUDIO
                        </a>
                    </div>
                    <div className="section__product_1"
                        style={{
                            paddingTop: "100px"
                        }}
                    >
                        <h1>Смартфоны / Телевизоры / Ноутбуки</h1>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Смартфоны" value="one" />
                                        <Tab label="Телевизоры" value="two" />
                                        <Tab label="Ноутбуки" value="three" />
                                    </TabList>
                                </Box>
                                <TabPanel value="one">
                                    <div className="home__card_all" style={{ marginBottom: "50px" }}>
                                        {newPhone?.map((el) => {
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
                                                    <b>{el.price1} UZS</b>
                                                    <div className="btn__bottom">
                                                        <button style={{ marginRight: "1rem" }}>{el.month} сум/мес.</button>
                                                        {!getItem(el._id) ? (
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
                                        })}
                                    </div>
                                </TabPanel>
                                <TabPanel value="two">
                                    <div className="home__card_all" style={{ marginBottom: "50px" }}>
                                        {newTv?.map((el) => {
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
                                                    <b>{el.price1} UZS</b>
                                                    <div className="btn__bottom">
                                                        <button style={{ marginRight: "1rem" }}>{el.month} сум/мес.</button>
                                                        {!getItem(el._id) ? (
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
                                        })}
                                    </div>
                                </TabPanel>
                                <TabPanel value="three">
                                    <div className="home__card_all" style={{ marginBottom: "50px" }}>
                                        {newNoutbook?.map((el) => {
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
                                                    <a href={`/menu/${el._id}`} style={{ minHeight: "120px" }}>{el.desc}</a>
                                                    <b>{el.price1} UZS</b>
                                                    <div className="btn__bottom">
                                                        <button style={{ marginRight: "1rem" }}>{el.month} сум/мес.</button>
                                                        {!getItem(el._id) ? (
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
                                        })}
                                    </div>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                    <div className="home__card_samsung">
                        <a href="">
                            <img src="https://elmakon.uz/images/abt__ut2/banners/all/36/1539x209_s0y4-rs.jpg" alt="" />
                            <h1>Вся техника Samsung <br /> в одном месте!</h1>
                        </a>
                    </div>
                    <div className="section__product_1"
                        style={{
                            paddingTop: "100px"
                        }}>
                        <h1>Новинки</h1>
                        <div className="home__card_all">
                            {newAvto?.map((el) => {
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
                                        <b>{el.price1} UZS</b>
                                        <div className="btn__bottom">
                                            <button style={{ marginRight: "1rem" }}>{el.month} сум/мес.</button>
                                            {!getItem(el._id) ? (
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
                            })}
                        </div>
                    </div>
                    <div className="slider__all_2">
                        <Slider_2 />
                    </div>
                    <div className="section__product_1"
                        style={{
                            paddingTop: "100px"
                        }}>
                        <h1>Сейчас пользуется спросом</h1>
                        <div className="home__card_all">
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
                                        <b>{el.price1} UZS</b>
                                        <div className="btn__bottom">
                                            <button style={{ marginRight: "1rem" }}>{el.month} сум/мес.</button>
                                            {!getItem(el._id) ? (
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
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_home