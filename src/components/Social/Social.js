import React from 'react'
import './Social.scss'
import {TiSocialYoutube,TiSocialInstagram,TiSocialFacebook} from 'react-icons/ti';
import {FaGithubAlt} from 'react-icons/fa';
import {RiShareForward2Fill} from 'react-icons/ri';
import {SocialsContext} from '../../context/social';
import {Link} from 'react-router-dom'

export default function Social() {
    const {socials,loading} = React.useContext(SocialsContext);
    if(!loading){
        return null
    }
    else {
        return <div className="social-box">
                <ul className="socials">
                    {socials.map(social => {
                        if(social.name_icon === 'TiSocialYoutube'){
                            return <Link to={`${social.link}`} className="social" key={social.id}>
                                <TiSocialYoutube /></Link>
                        }
                        else if(social.name_icon === 'TiSocialInstagram'){
                            return <Link to={`${social.link}`} className="social" key={social.id}>
                                <TiSocialInstagram /></Link>
                        }
                        else if(social.name_icon === 'FaGithubAlt'){
                            return <Link to={`${social.link}`} className="social" key={social.id}>
                                <FaGithubAlt /></Link>
                        }
                        else if(social.name_icon === 'TiSocialFacebook'){
                            return <Link to={`${social.link}`} className="social" key={social.id}>
                                <TiSocialFacebook /></Link>
                        }
                        else {
                            return <Link to={`${social.link}`} className="social" key={social.id}>
                                <RiShareForward2Fill /></Link>;
                        }
                    })}
                </ul>
            <div className="border"></div>
        </div>
    }
}
