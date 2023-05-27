import React, { useContext } from 'react'
import { Context } from '../../context';
import '../Admin/Admin.scss'
import Card from '../Card/Card';

const Admin_2 = () => {

    const {
        dataSearch, mura, searchText, AdminDelete,
    } = useContext(Context);


    return (
        <>
            <div className="admin__pages__panel_2">
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
                        <div className="search_all">
                            <h1 style={{ color: "#fff", marginBottom: "10px" }}>
                                Удаление товара при помощи поиска
                            </h1>
                            <div className="searchbar">
                                <input type="text"
                                    value={mura}
                                    onChange={searchText.bind(this)}
                                    placeholder='поиск'
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
                                                        <li><b>{el.price1} UZS</b><p>{el.price2} UZS</p></li>
                                                        <li>
                                                            <button href="" className='clsPages' onClick={() => AdminDelete(el._id)}>
                                                                <i className="fa-solid fa-trash-can"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin_2