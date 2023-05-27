import React, { useContext } from 'react'
import { Context } from '../../context';
import '../Admin/Admin.scss'
import Card from '../Card/Card';

const Admin_3 = () => {

  const {
    dataSearch,
    mura,
    searchText,
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
    PatchElements,
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
      <div className="admin__pages__panel_3">
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
                
                value={code}
                placeholder='код товара'
                onChange={(e) => setCode(e.target.value)}
                type="text"
              />
              <input
                
                value={image1}
                placeholder='первое фото'
                onChange={(e) => setImage1(e.target.value)}
                type='url'
              />
              <input
                
                value={image2}
                placeholder='второе фото'
                onChange={(e) => setImage2(e.target.value)}
                type='url'
              />
              <input
                
                value={image3}
                placeholder='третие фото'
                onChange={(e) => setImage3(e.target.value)}
                type="text"
              />
              <input
                
                value={logo}
                placeholder='логотип бренда'
                onChange={(e) => setLogo(e.target.value)}
                type="text"
              />
              <input
                
                value={category1}
                placeholder='первая катрегория товара'
                onChange={(e) => setCategory1(e.target.value)}
                type="text"
              />
              <input
                
                value={category2}
                placeholder='вторая катрегория товара'
                onChange={(e) => setCategory2(e.target.value)}
                type="text"
              />
              <input
                
                value={category3}
                placeholder='третие катрегория товара'
                onChange={(e) => setCategory3(e.target.value)}
                type="text"
              />
              <input
                
                value={price1}
                placeholder='цена'
                onChange={(e) => setPrice1(e.target.value)}
                type="text"
              />
              <input
                
                value={month}
                placeholder='оплата в месяц'
                onChange={(e) => setMonth(e.target.value)}
                type="text"
              />
              <input
                
                value={guarantee}
                placeholder='горантия товара'
                onChange={(e) => setGuarantee(e.target.value)}
                type="text"
              />
              <input
                
                value={color}
                placeholder='цвет товара'
                onChange={(e) => setColor(e.target.value)}
                type="text"
              />
              <input
                
                value={brend}
                placeholder='бренд товара'
                onChange={(e) => setBrend(e.target.value)}
                type="text"
              />
            </div>
            <div className="search_all">
              <h1 style={{ color: "#fff", marginBottom: "10px" }}>
                Поменять товара при помощи поиска
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
                          <bdi>{el._id}</bdi>
                          <a href={`/menu/${el._id}`}>
                            <p>{el.desc}</p>
                          </a>
                          <ul>
                            <li>{el.category1}</li>
                            <a href={`/menu/${el._id}`}>
                              <li>Артикул: {el.code}</li>
                            </a>
                            <li className='clsLabel'>Телефоны, гаджеты, аксессуары</li>
                          </ul>
                          <ul className='card_bottom'>
                            <li><b>{el.price1} UZS</b><p>{el.price2} UZS</p></li>
                            <li>
                              <button href="" className='clsPages' onClick={() => PatchElements(el._id)}>
                                <i className="fa-solid fa-arrows-rotate"></i>
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

export default Admin_3