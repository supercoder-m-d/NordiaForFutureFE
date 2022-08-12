import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useHistory } from 'react-router-dom';
import { isMobile } from 'web3modal';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Autoplay } from "swiper";
// import "./home.css";

const Home = (props) => {
    const history = useHistory();
    const goToTeam = () => {
        history.push('/team');
    }
    const whitePaper = () => {

    }
    const joinCommunity = () => {
        window.open("https://discord.gg/5h2Em3Nh", "_blank")
    }
    const [vPopup, setVpopup] = useState(false);
    const onSlideChange = (e) => {
        if (e.activeIndex == 1 || e.activeIndex == 4) {
            
            document.getElementsByClassName('background')[0].setAttribute("class", 'background wear2earn-bg');
        } else if (e.activeIndex == 2) {
            document.getElementsByClassName('background')[0].setAttribute("class", 'background token-bg');
        } else {
            document.getElementsByClassName('background')[0].setAttribute("class", 'background backers-bg');
        }
    }
    return (
        <>
            <div className={`roboto-mono main-content`} style={{marginTop: '-50px'}}>
            <div className={`background wear2earn-bg`}></div>
            <Swiper
                className="mySwiper"
                onSlideChange={onSlideChange}
                loop
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay]}
            >
                <SwiperSlide className='d-flex flex-column align-items-end'>
                    <div className='welcome-text text-end'>WEAR AND EARN</div>
                    <div className='welcome-text text-end'>WITH</div>
                    <div className='norida-text text-end'>NORDIA!</div>
                    <div className='blue-ribbon wear-title'>Wear 2 Earn</div>
                    <div className='pt-3 text-end f-24 wear-desc'>
                    WE CREATED THE WORLD'S FIRST W2E CONCEPT. IT'S EASY, OWN THE T-SHIRT,
HAVE YOUR FRIENDS AROUND YOU
READ THE QR CODE ON THE T-SHIRT,
EARN TOKENS THROUGH THE APP.
ONLY THIS!
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-start'>
                    <div className='token-text text-end'>TOKENS IS</div>
                    <div className='welcome-text text-end'>ALREADY</div>
                    <div className='norida-text text-end'>READY!</div>
                    <div className='pt-3 f-24 wear-desc'>
                    WITHOUT RELEASING OUR NFT COLLECTION, 
WE HAVE PREPARED OUR TOKEN CONTRACTS AND PUBLISHED THEM ON THE BSC NETWORK. YOU CAN REVIEW THE TOKENE ECONOMY AND ALL THE FEATURES IN THE WHITEPAPER.
                    </div>
                    <div className='pt-3'>
                        <div className='btn btn-paper me-3 text-white' onClick={whitePaper}>WHITEPAPER</div>
                        <div className='btn btn-community text-white' onClick={joinCommunity}>JOIN COMMUNITY</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center'>
                    <div className='token-text text-end'>OUR BACKERS</div>
                    <div className='d-flex flex-wrap justify-content-center py-2 overflow-auto' style={{maxWidth: '900px', maxHeight: '500px'}}>
                        <img src={'/images/brands/1.png'} alt='brand-img'/>
                        <img src={'/images/brands/2.png'} alt='brand-img'/>
                        <img src={'/images/brands/3.png'} alt='brand-img'/>
                        <img src={'/images/brands/4.png'} alt='brand-img'/>
                        <img src={'/images/brands/5.png'} alt='brand-img'/>
                        <img src={'/images/brands/6.png'} alt='brand-img'/>
                    </div>
                    <div className='f-24'>AND THE SUPPORT OF MORE THAN A HUNDRED CELEBRITIES!</div>
                </SwiperSlide>
            </Swiper>
            
                {/* <img
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
                </div>    */}
                   
            </div>
            {vPopup && <div className='rm-vpopup roboto-mono d-flex flex-column align-items-center justify-content-center'>
                    <div className='btn btn-rm-close' onClick={() => {setVpopup(false);}}> <i className="fas fa-times"></i></div>
                    <video width="100%" autoPlay={true} loop={true} muted>
                        <source src={`/video/intro.mp4`} type="video/mp4"></source>
                    </video>
                </div>}  
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