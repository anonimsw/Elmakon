import React, { useContext } from 'react';
import "../../Header/Header_cart/Header_cart.scss";
import { useCart } from 'react-use-cart'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Context } from '../../../context';


const Header_cart = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: "11px",
    };

    const { open3, handleOpen3, handleClose3 } = useContext(Context)


    const { isEmpty, items, removeItem, updateItemQuantity, emptyCart } = useCart()
    let total = 0;

    const [age, setAge] = React.useState('');




    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <header className="pages_cart">
                <div className="container">
                    <div className="cart__pages_top">
                        <p><a href="/">Главная</a> / Содержимое корзины</p>
                    </div>
                    {isEmpty ? <div className="cart">
                        <p style={{ fontSize: "17px" }}>Ваша корзина пуста</p>
                        <div className="cart__background">
                            <a href="/telefon_gadjet_aksessuar/">Продолжить покупки</a>
                        </div>

                    </div> : (
                        <>
                            <h1>Содержимое корзины</h1>
                            <div className="cart__background">
                                <a href="/telefon_gadjet_aksessuar/">Продолжить покупки</a>
                                <Button onClick={handleOpen3} style={{ width: "165px", fontSize: "14px", height: "46px", marginLeft: "70%" }}>Оформить заказ</Button>
                                <Modal
                                    open={open3}
                                    onClose={handleClose3}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2"
                                            style={{
                                                color: "#3e3e3e",
                                                padding: "10px 20px",
                                                borderTopRightRadius: "10px",
                                                borderTopLeftRadius: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                fontSize: "22px",
                                                fontFamily: "sans-serif",
                                                borderBottom: "1px solid #d5d5d5"
                                            }}>
                                            Вход
                                            <i className="fa-solid fa-xmark" onClick={handleClose3}
                                                style={{
                                                    fontSize: "45px",
                                                    color: "black"
                                                }}></i>
                                        </Typography>
                                        <Typography>
                                            <div className="center" style={{ padding: "0 20px" }}>
                                                <p
                                                    style={{
                                                        fontSize: "13px",
                                                        color: '#858585',
                                                        fontWeight: "normal",
                                                        marginTop: "20px"
                                                    }}>Номер телефона
                                                    <span
                                                        style={{
                                                            color: "#ea7162",
                                                            fontSize: "13px",
                                                            paddingLeft: "5px"
                                                        }}>
                                                        *
                                                    </span>
                                                </p>
                                                <input type="text"
                                                    name='user-phone'
                                                    data-prefix='+998'
                                                    placeholder='+998'
                                                    style={{
                                                        minHeight: "40px",
                                                        borderRadius: "5px",
                                                        border: "1px solid #c8c8c8",
                                                        outline: "none",
                                                        background: "#FFF",
                                                        width: "100%",
                                                        paddingLeft: "10px"
                                                    }} />
                                                <p
                                                    style={{
                                                        fontSize: "13px",
                                                        color: '#858585',
                                                        fontWeight: "normal",
                                                        marginTop: "20px"
                                                    }}>Пароль
                                                    <span
                                                        style={{
                                                            color: "#ea7162",
                                                            fontSize: "13px",
                                                            paddingLeft: "5px"
                                                        }}>
                                                        *
                                                    </span>
                                                </p>
                                                <input type="password"
                                                    style={{
                                                        minHeight: "40px",
                                                        borderRadius: "5px",
                                                        border: "1px solid #c8c8c8",
                                                        outline: "none",
                                                        background: "#FFF",
                                                        width: "100%",
                                                        paddingLeft: "10px"
                                                    }} />
                                            </div>
                                            <div className="bottom"
                                                style={{
                                                    background: "#f6f6f6",
                                                    padding: "20px",
                                                    borderBottomLeftRadius: "10px",
                                                    borderBottomRightRadius: "10px"
                                                }}>
                                                <button
                                                    style={{
                                                        background: "#ff671e",
                                                        borderRadius: "10px",
                                                        color: "#FFF",
                                                        border: 'none',
                                                        fontSize: "16px",
                                                        width: "100%",
                                                        boxShadow: "inset 0 -2px 0 0 rgba(0,0,0,0.3)",
                                                        padding: "10px 0",
                                                        margin: "10px 0"
                                                    }}>Войти
                                                </button>
                                                <a href="" className='cart__modal_bottom'
                                                    style={{
                                                        color: "#608CB3",
                                                        fontSize: "16px",
                                                        margin: "10px 0",
                                                        display: "flex",
                                                        justifyContent: "center"
                                                    }}>
                                                    Зарегистрироваться
                                                </a>
                                            </div>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                        </>
                    )}
                    {items?.map((el) => {
                        const priceCount = el.count * el?.price;
                        total += priceCount;
                        if (el.count >= 1) {
                            return (
                                <div className='cart__menu' key={el._id}>
                                    <div className="cart__menu_product">
                                        <ul>
                                            <li>
                                                <b style={{ padding: "10px" }}>Товар</b>
                                            </li>
                                            <br />
                                            <li>
                                                <a href={`/menu/${el._id}`}>
                                                    <img src={el.image1} alt="" style={{ width: "150px", height: "150px" }} />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul style={{ width: "40%" }}>
                                            <li>
                                                <b style={{ margin: "13px" }}></b>
                                            </li>
                                            <br />
                                            <li>
                                                <p>
                                                    <a href={`/menu/${el._id}`}>
                                                        {el.desc}
                                                    </a>
                                                    <i className="fa-solid fa-x" onClick={() => { removeItem(el._id) }}></i>
                                                </p>
                                            </li>
                                            <li>
                                                <a href={`/menu/${el._id}`}>
                                                    <span>
                                                        КОД: {el.code}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <b style={{ marginTop: "10px" }}>Цвет:</b>
                                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                    <Select
                                                        value={age}
                                                        onChange={handleChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        className='selector_all'
                                                    >
                                                        <MenuItem value="" className='language'>
                                                            {el.color}
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </li>
                                            <li>
                                                <b style={{ marginTop: "10px" }}>Встроенная память:</b>
                                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                    <Select
                                                        value={age}
                                                        onChange={handleChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        className='selector_all'
                                                    >
                                                        <MenuItem value="" className='language'>
                                                            <p>
                                                                {el.storage1}
                                                            </p>
                                                        </MenuItem>
                                                        <MenuItem value={20} className='language'>
                                                            <p>
                                                                {el.storage2}
                                                            </p>
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </li>
                                            <li>
                                                <b style={{ marginTop: "10px" }}>Оперативная память:</b>
                                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                    <Select
                                                        value={age}
                                                        onChange={handleChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        className='selector_all'
                                                    >
                                                        <MenuItem value="" className='language'>
                                                            <p>
                                                                {el.ram1}
                                                            </p>
                                                        </MenuItem>
                                                        <MenuItem value={20} className='language'>
                                                            <p>
                                                                {el.ram2}
                                                            </p>
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <b style={{ textAlign: "right", padding: "10px" }}>Цена за ед.</b>
                                            </li>
                                            <br />
                                            <li>
                                                {el.price1} UZS
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <b style={{ padding: "10px" }}>Кол-во</b>
                                            </li>
                                            <br />
                                            <li style={{ paddingLeft: "10px" }}>
                                                <div className="price">
                                                    <button onClick={() => updateItemQuantity(el._id, el.count++)}>+</button>
                                                    {el.count}
                                                    <button onClick={() => updateItemQuantity(el._id, el.count--)}>-</button>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <b style={{ padding: "10px" }}>Цена продукта уплачена</b>
                                            </li>
                                            <br />
                                            <li style={{ textAlign: "right", paddingRight: "10px" }}>{priceCount} UZS</li>
                                        </ul>
                                    </div>
                                </div>
                            );

                        } else {
                            removeItem(el._id);

                        }
                    })}
                    {isEmpty ? null : <>
                        <div className="cart__bottom">
                            <div className="right">
                                <ul>
                                    <li style={{ paddingLeft: "60%" }}>Продавец:</li>
                                    <li>ELMAKON</li>
                                </ul>
                                <ul>
                                    <li style={{ paddingLeft: "60%" }}>Сумма</li>
                                    <li>{total}</li>
                                </ul>
                                <ul style={{ borderBottom: "1px solid #a2a2a2" }}>
                                    <li style={{ paddingLeft: "60%" }}>Стоимость доставки</li>
                                    <li>50000 UZS</li>
                                </ul>
                                <ul style={{ marginTop: "10px" }}>
                                    <li style={{ padding: "0 0 0 60% " }}>
                                        <b>
                                            Итоговая стоимость
                                        </b>
                                    </li>
                                    <li style={{ padding: "0px" }}>
                                        <p >
                                            {total + 50000} UZS
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cart__background" style={{ marginTop: "50px" }}>
                            <a href="/telefon_gadjet_aksessuar/">Продолжить покупки</a>
                            <button className='clear__cart' onClick={() => emptyCart()}>
                                Очистить корзину
                            </button>
                            <Button onClick={handleOpen3} style={{ width: "165px", fontSize: "14px", height: "46px", marginLeft: "55%" }}>Оформить заказ</Button>
                            <Modal
                                open={open3}
                                onClose={handleClose3}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                        style={{
                                            color: "#3e3e3e",
                                            padding: "10px 20px",
                                            borderTopRightRadius: "10px",
                                            borderTopLeftRadius: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            fontSize: "22px",
                                            fontFamily: "sans-serif",
                                            borderBottom: "1px solid #d5d5d5"
                                        }}>
                                        Вход
                                        <i className="fa-solid fa-xmark" onClick={handleClose3}
                                            style={{
                                                fontSize: "45px",
                                                color: "black"
                                            }}></i>
                                    </Typography>
                                    <Typography>
                                        <div className="center" style={{ padding: "0 20px" }}>
                                            <p
                                                style={{
                                                    fontSize: "13px",
                                                    color: '#858585',
                                                    fontWeight: "normal",
                                                    marginTop: "20px"
                                                }}>Номер телефона
                                                <span
                                                    style={{
                                                        color: "#ea7162",
                                                        fontSize: "13px",
                                                        paddingLeft: "5px"
                                                    }}>
                                                    *
                                                </span>
                                            </p>
                                            <input type="text"
                                                name='user-phone'
                                                data-prefix='+998'
                                                placeholder='+998'
                                                style={{
                                                    minHeight: "40px",
                                                    borderRadius: "5px",
                                                    border: "1px solid #c8c8c8",
                                                    outline: "none",
                                                    background: "#FFF",
                                                    width: "100%",
                                                    paddingLeft: "10px"
                                                }} />
                                            <p
                                                style={{
                                                    fontSize: "13px",
                                                    color: '#858585',
                                                    fontWeight: "normal",
                                                    marginTop: "20px"
                                                }}>Пароль
                                                <span
                                                    style={{
                                                        color: "#ea7162",
                                                        fontSize: "13px",
                                                        paddingLeft: "5px"
                                                    }}>
                                                    *
                                                </span>
                                            </p>
                                            <input type="password"
                                                style={{
                                                    minHeight: "40px",
                                                    borderRadius: "5px",
                                                    border: "1px solid #c8c8c8",
                                                    outline: "none",
                                                    background: "#FFF",
                                                    width: "100%",
                                                    paddingLeft: "10px"
                                                }} />
                                        </div>
                                        <div className="bottom"
                                            style={{
                                                background: "#f6f6f6",
                                                padding: "20px",
                                                borderBottomLeftRadius: "10px",
                                                borderBottomRightRadius: "10px"
                                            }}>
                                            <button
                                                style={{
                                                    background: "#ff671e",
                                                    borderRadius: "10px",
                                                    color: "#FFF",
                                                    border: 'none',
                                                    fontSize: "16px",
                                                    width: "100%",
                                                    boxShadow: "inset 0 -2px 0 0 rgba(0,0,0,0.3)",
                                                    padding: "10px 0",
                                                    margin: "10px 0"
                                                }}>Войти
                                            </button>
                                            <a href="" className='cart__modal_bottom'
                                                style={{
                                                    color: "#608CB3",
                                                    fontSize: "16px",
                                                    margin: "10px 0",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                }}>
                                                Зарегистрироваться
                                            </a>
                                        </div>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </>}
                </div>
            </header >
        </>
    )
}

export default Header_cart