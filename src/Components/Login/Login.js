import React, {useState} from 'react'
import css from "./login.module.css"
import {NavLink, useHistory} from "react-router-dom";
import {HOME_PAGE, isAuth, REGISTRATION_PAGE} from "../../utils/urls";
import anne from "../../Svg/anne-edgar.png"

const Login = () => {


    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const login = (e) => {
        e.preventDefault()
        let emailLocal = JSON.parse(localStorage.getItem('user'))['email']
        let passwordLocal = JSON.parse(localStorage.getItem('user'))['password']

        if (emailLocal === email && passwordLocal === password) {
            localStorage.setItem('token', "123454")
        }

        if (localStorage.getItem('token')) {
            history.push(HOME_PAGE)
            window.location.reload()
        }
    }

    return (

        <div className={css.loginBody}>
            <div className={css.loginFilds}>
                <form onSubmit={login}>
                    <h1>Login</h1>
                    <div>Email <br/>
                        <input
                            className={css.loginFildsItems}
                            type="text"
                            value={email}
                            onChange={changeEmail}/>
                    </div>
                    <div>Password<br/>
                        <input
                            className={css.loginFildsItems}
                            cn="loginInput"
                            type="password"
                            value={password}
                            onChange={changePassword}
                        />
                    </div>
                    <button className={css.loginFildsItemsBtn}>
                        Login
                    </button>
                </form>
                <h4 className={css.createAc}>You Havn't Acount</h4>
                <div><NavLink to={REGISTRATION_PAGE}>
                    <button className={css.loginFildsItemsRegisterBtn}>Create Acount</button>
                </NavLink></div>
            </div>
            <div className={css.loginImageBody}>
                <div className={css.loginImage}><img src={anne}/></div>
                <p className={css.loginImageText}><b>Plard</b><i>Gold</i></p>
            </div>

        </div>
    );
}

export default Login

