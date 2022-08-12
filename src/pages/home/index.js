import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useHistory } from 'react-router-dom';
import { isMobile } from 'web3modal';
// import "./home.css";

const Home = (props) => {
    const history = useHistory();
    const goToTeam = () => {
        history.push('/team');
    }
    const [vPopup, setVpopup] = useState(false);
    return (
        <>
            <div className={`roboto-mono main-content`}>
                <div className={`background home-bg`}></div>
                <img
                    className='position-fixed home-image'
                    src={'images/andr1.png'}
                    alt='item'
                />
                <div className='saira-stencil-one saira-stencil-main text-white'>
                    <div className='welcome-text'>WELCOME</div>
                    <div className='welcome-text'>TO THE</div>
                    <div className='norida-text '>NORDIA</div>                    

                </div>    
                <div className='text-white pt-2'>
                    <div className='home-subtitle1 pb-4'>DISCOVER DIGITAL ART AND COLLECT NFTS</div>                    
                    <button className="text-white home-subtitle1 btn-no-bg" onClick={goToTeam}>LET’S ORBIT         
                        <img
                            className='ps-3'
                            src={'images/arrowRight.png'}
                            alt='arrow-right'
                            />
                    </button>
                </div>   
                {vPopup && <div className='rm-vpopup roboto-mono d-flex flex-column align-items-center justify-content-center'>
                    <div className='btn btn-rm-close' onClick={() => {setVpopup(false);}}> <i class="fas fa-times"></i></div>
                    <video width="100%" autoPlay={true} loop={true} muted>
                        <source src={`/video/intro.mp4`} type="video/mp4"></source>
                    </video>
                </div>}     
            </div>

            <div className='footer d-flex align-items-center flex-wrap flex-lg-nowrap justify-content-around roboto-mono py-2 py-lg-5'>
                <div className='footer-item text-center'>
                    <div className="f-40 saira-stencil-one text-white">AUGUST</div>
                    <div className="f-16">Mint Date :</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item text-center'>
                    <div className="f-40 saira-stencil-one text-white">10.021</div>
                    <div className="f-16">NFT'S:</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item text-center'>
                    <div className="f-40 saira-stencil-one text-white">20K+</div>
                    <div className="f-16">Community</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item d-flex align-items-center justify-content-center'>
                    <img
                        src={'images/Play.png'}
                        alt='play-icon'
                    />
                    <div className="btn ps-2 f-16 text-white" onClick={() => {setVpopup(true);}}>PLAY VIDEO</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item d-flex justify-content-around'>
                    <a href="https://www.facebook.com/nordiaforfuture" className='px-3' target="_blank" rel="noreferrer">
                        <img className='footerItemSocial'
                            src={'images/FbIcon.png'}
                            alt='fb-icon'
                        />
                    </a>
                    <a href="https://www.instagram.com/nordiaforfuture/" className='px-3' target="_blank" rel="noreferrer">
                        <img
                            className='footerItemSocial'
                            src={'images/IgIcon.png'}
                            alt='ig-icon'
                        />
                    </a>
                    <a href="https://twitter.com/nordiaforfuture" className='px-3' target="_blank"  rel="noreferrer">
                        <img
                            className='footerItemSocial'
                            src={'images/TwtIcon.png'}
                            alt='tw-icon'
                        />
                    </a>
                </div>
            </div>
            {/* <MobileView className='footer d-flex align-items-center justify-content-around roboto-mono py-5'>
                <div className='footer-item text-center'>
                    <div className="f-40 saira-stencil-one text-white">05.07.2022</div>
                    <div className="f-16">Mint Date :</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item text-center'>
                    <div className="f-40 saira-stencil-one text-white">10.021</div>
                    <div className="f-16">NFT'S:</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item text-center'>
                    <div className="f-40 saira-stencil-one text-white">20K+</div>
                    <div className="f-16">Community</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item d-flex align-items-center justify-content-center'>
                    <img
                        src={'images/Play.png'}
                        alt='play-icon'
                    />
                    <div className="btn ps-2 f-16 text-white" onClick={() => {setVpopup(true);}}>PLAY VIDEO</div>
                </div>
                <div className='vertical-line' />
                <div className='footer-item d-flex justify-content-around'>
                    <a href="https://www.facebook.com/nordiaforfuture" className='px-3' target="_blank" rel="noreferrer">
                        <img className='footerItemSocial'
                            src={'images/FbIcon.png'}
                            alt='fb-icon'
                        />
                    </a>
                    <a href="https://www.instagram.com/nordiaforfuture/" className='px-3' target="_blank" rel="noreferrer">
                        <img
                            className='footerItemSocial'
                            src={'images/IgIcon.png'}
                            alt='ig-icon'
                        />
                    </a>
                    <a href="https://twitter.com/nordiaforfuture" className='px-3' target="_blank"  rel="noreferrer">
                        <img
                            className='footerItemSocial'
                            src={'images/TwtIcon.png'}
                            alt='tw-icon'
                        />
                    </a>
                </div>
            </MobileView> */}
            
        </>
        
    )
}
export default Home;