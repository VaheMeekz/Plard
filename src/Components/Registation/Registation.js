import React, {useState} from 'react';
import css from "./registration.module.css"
import {useHistory, useLocation} from "react-router-dom"
import {LOGIN_PAGE} from "../../utils/urls";
import anne from "../../Svg/anne-edgar.png"

const Registration = () => {

    const history = useHistory()

    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const changeUserName = (e) => {
        setUsername(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const registration = (e) => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify({
            userName,
            email,
            password,
            confirmPassword
        }))
        history.push(LOGIN_PAGE)
    }

    return (
        <>
            <div className={css.loginBody}>
                <div className={css.loginFilds}>
                    <h1>Registration</h1>
                    <form onSubmit={registration}>
                        <div> Name <br/><input
                            className={css.registrationFildsItems}
                            type="text"
                            placeholder="Username"
                            value={userName}
                            onChange={changeUserName}
                        /></div>
                        <div> Email <br/> <input
                            className={css.registrationFildsItems}
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={changeEmail}
                        /></div>
                        <div> Password <br/> <input
                            className={css.registrationFildsItems}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={changePassword}
                        /></div>
                        <div>Confirm Password <br/> <input
                            className={css.registrationFildsItems}
                            type="password"
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={changeConfirmPassword}
                        /></div>
                        <div>
                            <button className={css.registrationFildsItemsBtn}>
                                Registration
                            </button>
                        </div>
                    </form>
                </div>
                <div className={css.loginImageBody}>
                    <div className={css.loginImage}><img src={anne}/></div>
                    <p className={css.loginImageText}><b>Plard</b><i>Gold</i></p>
                </div>
            </div>
        </>
    );
};

export default Registration;