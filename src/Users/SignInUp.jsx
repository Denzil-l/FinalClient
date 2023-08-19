import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputWithlabel from "./LabelWithInput";
import './Users.css'
import Verify from "../Auth/Verify";
import { AuthContext } from "../AuthContext";

export const SignInUp = (props) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { type } = props
    const navigate = useNavigate()
    const { setAuthenticated } = useContext(AuthContext)
    const { setUserId } = useContext(AuthContext)
    const { userId } = useContext(AuthContext)

    const handleClick = async () => {
        console.log('I am here1')
        if (type === 'register') {
            try {
                console.log('I am here2')

                const response = await axios.post('https://finalserver-lne5.onrender.com/auth/register', { username, password, email })
                if (response.status == 200) {
                    console.log('I am here3')

                    console.log(response.data.message)
                    console.log(response.data.token)

                    navigate('/login')
                }

            } catch (error) {
                console.log(error);
            }
        } else if (type === 'login') {
            try {
                const response = await axios.post('https://finalserver-lne5.onrender.com/auth/login', { username, password })
                if (response.status == 200) {
                    console.log('I am id' + response.data.token)
                    setAuthenticated(true)
                    setUserId(response.data.token)
                    localStorage.setItem("userId", response.data.token);

                    console.log(userId)
                    navigate('/')
                }

            } catch (error) {
                console.log(error.response.data.message)

            }
        }
    }
    return (
        <>
            <Verify check={false}>
                <div className="Auth">
                    <form>
                        <InputWithlabel name={'username'} type={'text'} value={username} onChange={setUserName} />
                        <InputWithlabel name={'password'} type={'text'} value={password} onChange={setPassword} />


                        {props.type === 'register' && (
                            <InputWithlabel name={'email'} type={'text'} value={email} onChange={setEmail} />
                        )}

                        <button type="button" onClick={handleClick}>
                            {props.type}
                        </button>
                    </form>
                </div>
            </Verify>
            <Verify check={true}>
                <h2>You are already logged in </h2>
                <Link to='/'>Go to Home page</Link>
            </Verify>
        </>
    );

}