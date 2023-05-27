import React, { useContext } from 'react'
import { Context } from '../../context';
import { useCart } from 'react-use-cart';

const Noutbook_pages_menu = () => {


    const { newNoutbook } = useContext(Context);

    const { isEmpty, addItem, getItem, removeItem } = useCart();


    return (
        <>
            <header className="Header_product_all_pages">
                <div className="container">
                    <div className="product__background">
                    </div>
                    <div className="product__menu">
                        <div className="product__menu_top">
                            <h1>Ноутбуки</h1>
                            <p><a href="/">Главная</a> / Ноутбуки</p>
                        </div>
                        <div className="product__menu_all">
                            <div className="product__menu_left">
                                <ul>
                                    <a href="/noutbook/acer">
                                        <li>Acer</li>
                                    </a>
                                    <a href="/noutbook/dell">
                                        <li>Dell</li>
                                    </a>
                                    <a href="/noutbook/honor">
                                        <li>Honor</li>
                                    </a>
                                    <a href="/noutbook/msi">
                                        <li>MSI</li>
                                    </a>
                                    <a href="/noutbook/hp">
                                        <li>HP</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="product__menu_right">
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
                                            <a href={`/menu/${el._id}`} style={{ minHeight: "90px" }}>{el.desc}</a>
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
                        </div>
                    </div >
                </div >
            </header >
        </>
    )
}

export default Noutbook_pages_menu