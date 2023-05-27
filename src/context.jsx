import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'


const Context = createContext();

const ContextProvider = ({ children }) => {


    const [data, setData] = useState([]);
    const [mura, setMura] = useState("");
    const [_id, set_Id] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const [count, setCount] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");
    const [__v, set__V] = useState("");

    const [age, setAge] = React.useState('');
    const [age1, setAge1] = React.useState('');


    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const [open4, setOpen4] = React.useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);


    // admin opisanie

    const [code, setCode] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [logo, setLogo] = useState("");
    const [price1, setPrice1] = useState("");
    const [category1, setCategory1] = useState("");
    const [category2, setCategory2] = useState("");
    const [category3, setCategory3] = useState("");
    const [month, setMonth] = useState("");
    const [guarantee, setGuarantee] = useState("");
    const [color, setColor] = useState("");
    const [brend, setBrend] = useState("");
    // admin opisanie



    // filter
    const newSamsungGalaxy = data?.filter(el => el.category1 === "Samsung Galaxy")
    const newXiaomiRedmi = data?.filter(el => el.category1 === "Xiaomi Redmi")
    const newTcl = data?.filter(el => el.category1 === "TCL")
    const newAlcatel = data?.filter(el => el.category1 === "Alcatel")

    const newHp = data?.filter(el => el.category1 === "HP")
    const newAcer = data?.filter(el => el.category1 === "Acer")
    const newMsi = data?.filter(el => el.category1 === "MSI")
    const newDell = data?.filter(el => el.category1 === "Dell")
    const newHonor = data?.filter(el => el.category1 === "Honor")

    const newTv = data?.filter(el => el.category3 === "tv")
    const newLg_tv = data?.filter(el => el.category1 === "LG TV")
    const newXiaomi_tv = data?.filter(el => el.category1 === "Xiaomi TV")
    const newSamsung_tv = data?.filter(el => el.category1 === "Samsung TV")
    const newArtel_tv = data?.filter(el => el.category1 === "Artel TV")
    const newShivaki_tv = data?.filter(el => el.category1 === "Shivaki TV")


    const newBestsellers = data?.filter(el => el.category2 === "Bestsellers")

    // filter

    // admin delete

    const AdminDelete = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/elmakon/${_id}`)
                .then(() => window.location.reload());
            console.log("Data deleted");
        } catch (error) {
            alert(error);
        }
    };

    // admin patch

    const PatchElements = async (_id) => {
        await axios.patch(
            (`http://localhost:8080/elmakon/${_id}`),
            {
                desc: desc,
                code: code,
                image1: image1,
                image2: image2,
                image3: image3,
                logo: logo,
                category1: category1,
                category2: category2,
                category3: category3,
                price1: price1,
                month: month,
                guarantee: guarantee,
                color: color,
                brend: brend,
            }
        );
        window.location.reload();
    };

    // admin patch

    // admin creat

    const createDevice = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/elmakon/", {
                desc: desc,
                code: code,
                image1: image1,
                image2: image2,
                image3: image3,
                logo: logo,
                category1: category1,
                category2: category2,
                category3: category3,
                price1: price1,
                month: month,
                guarantee: guarantee,
                color: color,
                brend: brend,
            })
            .then((res) => {
                console.log(res.data);
                alert("Device created!");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });

    }

    // admin 



    // log\

    const API = "https://bob-fst-jwt.onrender.com/";
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPass, setloginPass] = useState();
    // logout

    // signUP
    const SignUp = (e) => {
        e.preventDefault();
        axios
            .post(`${API}api/sign-up/`, {
                email: e.target[0].value,
                username: e.target[1].value,
                password: e.target[2].value,
            })
            .then((res) => {
                if (res.status === 201) {
                    navigate("/");
                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };
    // SignUp 

    // SignIn
    const SignIn = (e) => {
        e.preventDefault();
        axios
            .post(`${API}api/sign-in/`, {
                email: e.target[0].value,
                password: e.target[1].value,
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("access", response.data.token);
                    navigate("/");
                }
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };
    // SignIn
    // const getApi = () => {
    React.useEffect(() => {
        axios
            .get("https://elmakon-api.onrender.com/elmakon")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    })
    // }

    const searchText = (event) => {
        setMura(event.target.value);
    };

    const dataSearch = data.filter((item) => {
        return item?.desc.toLowerCase().includes(mura.toLowerCase());
    });

    return (
        <>
            <Context.Provider
                value={{
                    // getApi,
                    AdminDelete,
                    createDevice,
                    open1,
                    open2,
                    open3,
                    open4,
                    mura,
                    data,
                    _id,
                    name,
                    price,
                    image,
                    desc,
                    count,
                    createdAt,
                    updatedAt,
                    __v,
                    newTcl,
                    age1,
                    setAge1,
                    newAlcatel,
                    loginEmail,
                    loginPass,
                    dataSearch,
                    age,
                    setOpen1,
                    handleOpen1,
                    handleClose1,
                    setOpen2,
                    handleOpen2,
                    handleClose2,
                    setOpen3,
                    handleOpen3,
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
                    handleClose3,
                    handleOpen4,
                    setOpen4,
                    handleClose4,
                    set_Id,
                    setMura,
                    navigate,
                    setData,
                    setLoginEmail,
                    setloginPass,
                    setName,
                    SignUp,
                    SignIn,
                    setAge,
                    setPrice,
                    setImage,
                    setDesc,
                    setCount,
                    setCreatedAt,
                    setUpdatedAt,
                    set__V,
                    searchText,
                    newSamsungGalaxy,
                    newBestsellers,
                    newXiaomiRedmi,
                    newTv,
                    newHp,
                    newAcer,
                    newMsi,
                    newDell,
                    newHonor,
                    newLg_tv,
                    newSamsung_tv,
                    newArtel_tv,
                    newXiaomi_tv,
                    newShivaki_tv,
                    PatchElements,
                }}>
                {children}
            </Context.Provider>
        </>
    );
};
export { Context, ContextProvider };


















//crud

//create - post yaratish
//read - get o'qish
//upadete - put yoki patch o'zgartirish
//delete - o'chirish
//axios 18 metod bor