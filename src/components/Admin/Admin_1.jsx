import React, { useContext } from 'react';
import '../Admin/Admin.scss';
import { Context } from '../../context';

const Admin_1 = () => {

    const {
        desc,
        code,
        image1,
        image2,
        image3,
        logo,
        category1,
        category2,
        category3,
        price1,
        month,
        guarantee,
        color,
        brend,
        createDevice,
        setDesc,
        setCode,
        setImage1,
        setImage2,
        setImage3,
        setLogo,
        setCategory1,
        setCategory2,
        setCategory3,
        setPrice1,
        setMonth,
        setGuarantee,
        setColor,
        setBrend,
    } = useContext(Context);


    return (
        <>
            <div className="admin__pages__panel_1">
                <div className="container">
                    <ul>
                        <li>
                            <a href="/_ber_sss_erk_/admin_1">
                                Добавить товар
                            </a>
                        </li>
                        <li>
                            <a href="/_ber_sss_erk_/admin_2">
                                Удалить товар
                            </a>
                        </li>
                        <li>
                            <a href="/_ber_sss_erk_/admin_3">
                                Поменят товар
                            </a>
                        </li>
                    </ul>
                    <div className="admin__creat__all">
                        <div className="input__creat">
                            <input
                                value={desc}
                                placeholder='Название товара'
                                onChange={(e) => setDesc(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={code}
                                placeholder='код товара'
                                onChange={(e) => setCode(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={image1}
                                placeholder='первое фото'
                                onChange={(e) => setImage1(e.target.value)}
                                type='url'
                            />
                            <input
                                required
                                value={image2}
                                placeholder='второе фото'
                                onChange={(e) => setImage2(e.target.value)}
                                type='url'
                            />
                            <input
                                required
                                value={image3}
                                placeholder='третие фото'
                                onChange={(e) => setImage3(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={logo}
                                placeholder='логотип бренда'
                                onChange={(e) => setLogo(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={category1}
                                placeholder='первая катрегория товара'
                                onChange={(e) => setCategory1(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={category2}
                                placeholder='вторая катрегория товара'
                                onChange={(e) => setCategory2(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={category3}
                                placeholder='третие катрегория товара'
                                onChange={(e) => setCategory3(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={price1}
                                placeholder='цена'
                                onChange={(e) => setPrice1(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={month}
                                placeholder='оплата в месяц'
                                onChange={(e) => setMonth(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={guarantee}
                                placeholder='горантия товара'
                                onChange={(e) => setGuarantee(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={color}
                                placeholder='цвет товара'
                                onChange={(e) => setColor(e.target.value)}
                                type="text"
                            />
                            <input
                                required
                                value={brend}
                                placeholder='бренд товара'
                                onChange={(e) => setBrend(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div className="card_menu" style={{ background: "#FFF" }}>
                            <a href='#'>
                                <div className="card_img_all">
                                    <div className="item">
                                        <img src="" alt="" className='img1' />
                                    </div>
                                    <div className="item">
                                        <img src="" alt="" className='img2' />
                                    </div>
                                    <div className="item">
                                        <img src="" alt="" className='img3' />
                                    </div>
                                </div>
                            </a>
                            <a href="">Название товара</a>
                            <p><span></span>Цена UZS</p>
                            <b>Цена UZS</b>
                            <div className="btn__bottom">
                                <button style={{ marginRight: "1rem" }}>Цена сум/мес.</button>
                            </div>
                        </div>
                    </div>
                    <button required onClick={createDevice} className='save__product'>
                        save product
                    </button>
                </div>
            </div>
        </>
    )
}

export default Admin_1