import React from 'react'
import { Input, Gap, Button, Link } from '../../components'
import { LoginBg } from '../../assets'
// import '../Register/register.scss'


const Login = () => {
    return (
        <div className="register">
        <div className='left'>
            <img
            src={LoginBg}
            className="bg__image"
            alt="register"
            />
            </div>

            <div className="right">
                <p className="title">Login</p>
                <Input
                label="Email"
                placeholder="Email"
                />
                <Gap height={20}/>

                <Input
                label="Password"
                placeholder="Password"
                />
                <Gap height={30}/>
                <Button 
                title="Login"
                />
                <Gap height={40}/>
                <Link title="Belum punya akun ? Register"/>
                </div>
        </div>
    )
}

export default Login
