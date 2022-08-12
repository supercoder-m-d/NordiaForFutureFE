import React, { useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const NavBar = (props) => {    
    const history = useHistory();
    const location = useLocation();
    const [menu, setMenu] = useState(false);
    const isDark = (location.pathname === '/about' || location.pathname === '/team' || location.pathname === '/roadmap' || location.pathname === '/nft')? false: true;

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
    const showMenu = () => {
        setMenu(true);
    }
    const join = () => {
        window.open("https://discord.gg/5h2Em3Nh", "_blank")
    }

    return (
        <div className={`d-flex justify-content-between top-bar align-items-center w-100 roboto ${!!isDark? 'dark': ''}`}>
            <div className='logo flex-fill'>
                <a href="/"><img src={`/images/${isDark? 'White_Logo.png': 'DarkLogo.png'}`} alt='logo'/></a>
            </div>
            <div className='d-flex align-items-center flex-fill justify-content-between menus'>
                <div className='btn tp-ag f-16' onClick={home} >HOME</div>
                <div className='btn tp-ag f-16' onClick={team}>TEAM</div>
                <div className='btn tp-ag f-16' onClick={about}>ABOUT</div>
                <div className='btn tp-ag f-16' onClick={nft}>NFT</div>
                <div className='btn tp-ag f-16' onClick={roadmap}>ROADMAP</div>
                <div className='btn btn-join f-14' onClick={join}>
                    <img src="/images/world.png" width={'15px'} height={'15px'} style={{marginTop: '2px', marginRight: '5px'}} alt='join-icon'/>JOIN US</div>
            </div>     
            <div className='btn menu-icon' onClick={showMenu}>
                <i class="fas fa-bars"></i>
            </div>      
           {menu && <div className='d-flex flex-column menu-list'>
                    <div className='text-end my-2'>
                        <div className='btn' onClick={() => {setMenu(false);}}><i class="fas fa-times"></i></div>
                    </div>
                    <div className='btn tp-ag f-16 my-2' onClick={home} >HOME</div>
                    <div className='btn tp-ag f-16 my-2' onClick={team}>TEAM</div>
                    <div className='btn tp-ag f-16 my-2' onClick={about}>ABOUT</div>
                    <div className='btn tp-ag f-16 my-2' onClick={nft}>NFT</div>
                    <div className='btn tp-ag f-16 my-2' onClick={roadmap}>ROADMAP</div>
                    <div className='btn btn-join f-14 my-2' onClick={join}>
                        <img src="/images/world.png" width={'15px'} height={'15px'} style={{marginTop: '2px', marginRight: '5px'}} alt='join-icon'/>JOIN US
                    </div>
                    
            </div>   }  
        </div>
    )
}
export default NavBar;