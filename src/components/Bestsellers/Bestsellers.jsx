import React, { useContext, useEffect } from 'react'
import { Context } from '../../context'
import { useCart } from 'react-use-cart';

const Bestsellers = () => {
    const { newBestsellers, getApi } = useContext(Context);
    const { isEmpty, addItem, getItem, removeItem } = useCart();

    useEffect(() => {
        // getApi()
    }, [])

    return (
        <>
                {newBestsellers?.map((el) => {
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
        </>
    )
}

export default Bestsellers