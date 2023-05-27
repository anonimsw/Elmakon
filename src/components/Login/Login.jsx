import React, { useContext } from 'react';
import { Context } from '../../context';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const Login = () => {

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
    const { handleClose3, handleOpen3, open3, handleClose4, handleOpen4, open4, SignUp, SignIn, } = useContext(Context);

    return (


        <>
            <Button onClick={handleOpen3} style={{ fontSize: "16px", height: "46px", display: "flex", alignItems: "center", gap: "0.5rem", textTransform: "none" }}>
            <i className="fa-regular fa-circle-user"></i>
                <b style={{ fontWeight: "800", color: "#FFF" }}>
                    Войти
                </b>
            </Button>
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
                        <form onSubmit={SignIn}>
                            <div className="center" style={{ padding: "0 20px" }}>
                                <p
                                    style={{
                                        fontSize: "13px",
                                        color: '#858585',
                                        fontWeight: "normal",
                                        marginTop: "20px"
                                    }}>E-mail
                                    <span
                                        style={{
                                            color: "#ea7162",
                                            fontSize: "13px",
                                            paddingLeft: "5px"
                                        }}>
                                        *
                                    </span>
                                </p>
                                <input type="email"
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
                            <button
                                style={{
                                    background: "#ff671e",
                                    borderRadius: "10px",
                                    color: "#FFF",
                                    border: 'none',
                                    fontSize: "16px",
                                    width: "360px",
                                    boxShadow: "inset 0 -2px 0 0 rgba(0,0,0,0.3)",
                                    padding: "10px 0",
                                    margin: "30px 20px 20px"
                                }}>
                                Войти
                            </button>
                        </form>
                        <Button onClick={handleOpen4} style={{
                            color: "#608db3",
                            textTransform: "none",
                            display: "flex",
                            justifyContent: "center",
                            margin: "0",
                            width: "100%",
                            marginBottom: "20px"
                        }}>
                            Зарегистрироваться
                        </Button>
                        <Modal
                            open={open4}
                            onClose={handleClose4}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2"
                                    style={{
                                        color: "#3e3e3e",
                                        padding: "0px 20px",
                                        borderTopRightRadius: "10px",
                                        borderTopLeftRadius: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        fontSize: "22px",
                                        fontFamily: "sans-serif",
                                        borderBottom: "1px solid #d5d5d5"
                                    }}>
                                    Создать учетную запись
                                    <i className="fa-solid fa-xmark" onClick={handleClose4}
                                        style={{
                                            fontSize: "45px",
                                            color: "black"
                                        }}></i>
                                </Typography>
                                <Typography>
                                    <form onSubmit={SignUp}>
                                        <div className="center" style={{ padding: "0 20px" }}>
                                            <p
                                                style={{
                                                    fontSize: "13px",
                                                    color: '#858585',
                                                    fontWeight: "normal",
                                                    marginTop: "20px"
                                                }}>
                                                E-mail
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
                                                }}>Имя
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
                                                }}>Придумайте пароль
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
                                                }}
                                                type='submit'
                                            >
                                                Зарегистрироваться
                                            </button>
                                            <button
                                                style={{
                                                    fontSize: "16px",
                                                    width: "100%",
                                                    border: "none",
                                                    background: "none",
                                                    color: "#608db3"
                                                }}
                                                onClick={() => handleClose4()}
                                            >
                                                Я уже зарегистрирован
                                            </button>
                                        </div>
                                    </form>
                                </Typography>
                            </Box>
                        </Modal>
                    </Typography>
                </Box>
            </Modal >
        </>
    )
}

export default Login