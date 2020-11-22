import React from 'react'
import './Social.scss'
import {TiSocialYoutube,TiSocialInstagram,TiSocialFacebook} from 'react-icons/ti';
import {FaGithubAlt} from 'react-icons/fa';
import {RiShareForward2Fill} from 'react-icons/ri';
import {SocialsContext} from '../../context/social';

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
                            return <a target="_blank" rel="noreferrer" href={`${social.link}`} className="social" key={social.id}>
                                <TiSocialYoutube /></a>
                        }
                        else if(social.name_icon === 'TiSocialInstagram'){
                            return <a target="_blank" rel="noreferrer" href={`${social.link}`} className="social" key={social.id}>
                                <TiSocialInstagram /></a>
                        }
                        else if(social.name_icon === 'FaGithubAlt'){
                            return <a target="_blank" rel="noreferrer" href={`${social.link}`} className="social" key={social.id}>
                                <FaGithubAlt /></a>
                        }
                        else if(social.name_icon === 'TiSocialFacebook'){
                            return <a target="_blank" rel="noreferrer" href={`${social.link}`} className="social" key={social.id}>
                                <TiSocialFacebook /></a>
                        }
                        else {
                            return <a target="_blank" rel="noreferrer" href={`${social.link}`} className="social" key={social.id}>
                                <RiShareForward2Fill /></a>;
                        }
                    })}
                </ul>
            <div className="border"></div>
        </div>
    }
}
