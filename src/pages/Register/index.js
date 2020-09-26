import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets'
import {Input, Button, Gap, Link} from '../../components'

const Register = () => {
    return (
        <div className="register">
            <div className='left'>
            <img
            src={RegisterBg}
            className="bg__image"
            alt="register"
            />
            </div>

            <div className="right">
                <p className="title">Register</p>
                <Input
                label="Full Name"
                placeholder="Full Name"
                />
                <Gap height={20}/>

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
                title="Register"
                />
                <Gap height={40}/>
                <Link title="Login"/>
            </div>
         
        </div>
    )
}

export default Register
