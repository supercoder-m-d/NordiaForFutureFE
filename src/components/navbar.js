import React, {useCallback, useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import LOGO from '../images/logo.png';
const NavBar = (props) => {    
    const history = useHistory();
    const location = useLocation();
    const isDark = (location.pathname == '/about' || location.pathname == '/team' || location.pathname == '/roadmap')? false: true;

    const home = () => {
        history.push('/');
    }
    const team = () => {
        history.push('/team');
    }
    const about = () => {
        history.push('/about');
    }
    const nft = () => {
        history.push('/nft');
    }
    const roadmap = () => {
        history.push('/roadmap');
    }

    return (
        <div className={`d-flex justify-content-between top-bar roboto ${!!isDark? 'dark': ''}`}>
            <div className='logo flex-fill'>
                <a href="/"><img src={`/images/${isDark? 'White_Logo.png': 'DarkLogo.png'}`} alt='logo'/></a>
            </div>
            <div className='d-flex align-items-center flex-fill justify-content-between'>
                <div className='btn tp-ag f-16' onClick={home} >HOME</div>
                <div className='btn tp-ag f-16' onClick={team}>TEAM</div>
                <div className='btn tp-ag f-16' onClick={about}>ABOUT</div>
                <div className='btn tp-ag f-16' onClick={nft}>NFT</div>
                <div className='btn tp-ag f-16' onClick={roadmap}>ROADMAP</div>
                <div className='btn btn-join f-14'>
                    <img src="/images/world.png" width={'15px'} height={'15px'} style={{marginTop: '2px', marginRight: '5px'}} alt='join-icon'/>JOIN US</div>
            </div>                
        </div>
    )
}
export default NavBar;