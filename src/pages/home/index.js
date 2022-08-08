import React, {useCallback, useEffect, useState} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
// import "./home.css";

const Home = (props) => {

    return (
        <>
            <div className='roboto-mono main-content'>
                <div className={`background home-bg`}></div>
                <img
                    className='position-fixed home-image'
                    src={'images/andr1.png'}
                    alt='item'
                />
                <div className='saira-stencil-one text-white'>
                    <div className='welcome-text'>WELCOME</div>
                    <div className='welcome-text'>TO THE</div>
                    <div className='norida-text '>NORDIA</div>                    

                </div>    
                <div className='text-white pt-2'>
                    <div className='home-subtitle1 pb-4'>DISCOVER DIGITAL ART AND COLLECT NFTS</div>                    
                    <button className="text-white home-subtitle1 btn-no-bg" href="#">LET’S ORBIT         
                        <img
                            className='ps-3'
                            src={'images/arrowRight.png'}
                            alt='arrow-right'
                            />
                    </button>
                </div>        
            </div>

            <BrowserView className='footer d-flex align-items-center flex-wrap flex-lg-nowrap justify-content-around roboto-mono py-2 py-lg-5'>
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
                    <div className="ps-2 f-16">PLAY VIDEO</div>
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
            </BrowserView>
            <MobileView className='footer d-flex align-items-center justify-content-around roboto-mono py-5'>
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
                    <div className="ps-2 f-16">PLAY VIDEO</div>
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
            </MobileView>
        </>
        
    )
}
export default Home;