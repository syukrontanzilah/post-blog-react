import React from 'react'
import './footer.scss'
import { UserBg, IcFacebook, IcTwitter, IcInstagram, IcWhatsapp } from '../../../assets'

const Icon = ({src, alt}) => {
    return (
<div className="icon-wrapper">
    <img className="icon-medsos" src={src} alt={alt} />
</div>
    )
}

const Footer = () => {
    return (
<div className="footer-wrap">
            
    <div className="footer">
        <div>
        <img className="logo" src={UserBg}/>
        </div>
            <div className="social-wrapper">
                <Icon src={IcFacebook} alt="facebook"/>
                <Icon src={IcTwitter} alt="twitter"/>
                <Icon src={IcInstagram} alt="instagram"/>
                <Icon src={IcWhatsapp} alt="whatsapp"/>
            </div>
        </div>


            <div className="copyright">
                  <p>Copyright 2020</p>
            </div>
           
        </div>
    )
}

export default Footer
