import React, {useCallback, useEffect, useState} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { FreeMode, Navigation, Thumbs } from "swiper";


import NFTCOMMON from '../../images/Common.png';
import NFTMEDIC from '../../images/Medic.png';
import NFTSoilder from '../../images/Soilder.png';
import NFTSCIENTIST from '../../images/Scientist.png';
import NFTCOMMANDER from '../../images/Commander.png';
import NFTENGINEER from '../../images/Engineer.png';
import LFAITH from '../../images/faith.png';
import LAZRIEL  from '../../images/azriel.png';
import LBAL from '../../images/bal.png';
import LBETU2 from '../../images/betu2.png';
import LCASTEX from '../../images/castex.png';
import LDAV12 from '../../images/dav12.png';
import LESRA from '../../images/esra.png';
import LFENN from '../../images/fnn.png';
import LLEIDA from '../../images/leida.png';
import LMARLE from '../../images/marle.png';
import LMASHAR from '../../images/mashar.png';
import LNYM from '../../images/nym.png';
import LRADIA from '../../images/radia.png';
import LREYCEX from '../../images/reycex.png';
import LSA5P4 from '../../images/sa5p4.png';
import LSOLA from '../../images/sola.png';
import LXANDER from '../../images/xander.png';
import LXAZEO from '../../images/xazeo.png';
import LJAWAL from '../../images/zawal.png';
import LZEV3 from '../../images/zev3.png';
const NFT = (props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
    return (
        <>
            <div className={`background nft-bg`}></div>
            <div className='d-flex align-items-center justify-content-center w-100 title pb-5'>
                Scenario
            </div>
            <div className='content'>
                <p className='pb-2'>As the world approaches the last corner of human troubles towards the last half of the 21st century, the unstoppable population growth, the difficulties in finding food, the highest course of unemployment; It takes away the will to live in people slowly but almost permanently.</p>

                <p className='pb-2'>Just as the pandemic that started in 2020 caught people in all four arms, what is happening now is strong and cruel enough to make humanity look for those difficult years. In the past, experts who wanted to find a solution to unemployment had a hard time finding people for a job to be produced, and a lot. Of course, it is not easy, after all, it is a community of people; especially the working class is almost gone. The fact that countries have put their economies in order and the difficulty in reaching basic foods for large masses is almost over, yes, but a bigger challenge is on the world's agenda. Attempts to be produced with human power have begun to fail. You ask why? because it is now more difficult to find a driver, construction worker, cleaner, sales consultant, administrative assistant, transporter, farmer than it is to jump a camel over a ditch. Experts, managers, scientists do not even include other issues on their agendas. In the course of all this chaos and in this period when the word 'hope' began to be forgotten, 'Nordia' rolls up its sleeves to serve humanity with the humanoid robots it has developed.
                Yes, let's meet now, we're 'Nordia'!</p>
                <p className='pb-2'>
                The date for the world shows 2122 AD. What do you think this means? Numbers have value now. Yes, the 22nd century is the beginning of an era. For humanity, nothing will ever be the same as before, and it never did. Nordias are divided into two groups. While some Nordias are happy to serve people, others argue that people are harming the world, and Nordias in particular. This situation, which these two groups advocate and which created tension, is a real crossroads, the kind that closes an era and opens a new one!
                Both groups make people think, thanks to their strong stance as much as the missions they defend. Because every idea is true and correct in its own context.
                And what happens next?
                Nordias are the winners of this fork in the road. Thanks to these ideas presented to man, Main Nordia is created. As of today, the Nordias have a mentor, a leader, and a trustee, Ana Nordia. This is powerful and professional proof of new actions!
                Who can't wait to meet the main Android?
                We feel this excitement.
                You ask why?
                Because, Main Android is the symbol of peace and mind of the new order!
                Everything and everyone, of course, time moves fast. 1st generation Nordias are in development. Everything is going well! 2nd generation Nordias are in development. The years are progressing, and when it comes to the 2180s, a wind of tension begins to blow again.
                Mankind began to take up arms. This is thought provoking!
                It is noticed that the raw material produced by man is in the nature of waste. This is a terrible waste!
                Why do humans do this? Or is there a threat to the order of the Nordias? Quiet tension!
                The date shows 2222 AD, and yes, it is now the predicted war environment.
                What are these people's plans? Unpredictable.
                Chaos arises again for Nordias?
                What to do now?</p>
                <p className='pb-2'>To be continued...</p>

            </div>
            <div className='d-flex align-items-center justify-content-center w-100 title pb-5'>
                Categories
            </div>
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div className='d-flex w-100 nft-common nft'>
                        <div className='d-flex align-items-end'>
                            <img src={NFTCOMMON} alt='nft-item'/>
                        </div>
                        <div className='flex-fill nft-content'>
                            <p className='title f-73'>Common</p>
                            <p className='f-24'>
                            They are the ones who have the most contact with normal people. They are found among the people as workers/unemployed. Some are abandoned and live on the streets. Others serve people. They serve in many areas such as babysitting, waitress, bus driver. Some have started a revolt. It's dangerous to see an angry Nordia walking down the street. Make sure to be friends.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex w-100 nft-medic nft'>
                        <div className='d-flex align-items-end'>
                            <img src={NFTMEDIC} alt='nft-item'/>
                        </div>
                        <div className='flex-fill nft-content'>
                            <p className='title f-73'>Medic</p>
                            <p className='f-24'>
                            Doctors are divided into two missions at Nordia. Some serve people, while others serve Nordias. They were produced less in number than the Commons. Error rates are almost zero. They are much more sensitive in surgery than humans. This is a tremendous event for healthcare. Although there are few exceptions, it does not go unnoticed.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex w-100 nft-engineer nft'>
                        <div className='d-flex align-items-end'>
                            <img src={NFTENGINEER} alt='nft-item'/>
                        </div>
                        <div className='flex-fill nft-content'>
                            <p className='title f-73'>Engineer</p>
                            <p className='f-24'>
                            Working areas are very wide. Engineers created all the structures of Nordia Corporation. They have labor in factories opened all over the world. They are quite intelligent and planned. Trust me, you don't want to run into their bad parts. They became the focus of attention by the public more than health workers. Indispensable products of big companies.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex w-100 nft-scientists nft'>
                        <div className='d-flex align-items-end'>
                            <img src={NFTSCIENTIST} alt='nft-item'/>
                        </div>
                        <div className='flex-fill nft-content'>
                            <p className='title f-73'>Scientist</p>
                            <p className='f-24'>
                            The smartest products developed by Nordia company. They broke new ground in the world on issues such as cancer treatments, Global warming, Fossil fuels, Atmosphere conservation. They can serve multiple purposes. If you have a company, you can buy it and use it. It is quite an expensive product. But it pays off in the end.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex w-100 nft-soilder nft'>
                        <div className='d-flex align-items-end'>
                            <img src={NFTSoilder} alt='nft-item'/>
                        </div>
                        <div className='flex-fill nft-content'>
                            <p className='title f-73'>Soilder</p>
                            <p className='f-24'>
                            We are talking about Nordia military forces... An indispensable part in large navies. They can serve in the air, land and naval forces. Some developers say it can even be used in space. Nordia company is silent about this. Non-trembling hands, unmistakable bullets, not getting tired, not getting hungry and not being thirsty... It is a product that every country wants to see in their army. Unless of course he pulls a gun on you.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex w-100 nft-commander nft'>
                        <div className='d-flex align-items-end'>
                            <img src={NFTCOMMANDER} alt='nft-item'/>
                        </div>
                        <div className='flex-fill nft-content'>
                            <p className='title f-73'>Commander</p>
                            <p className='f-24'>
                            The most dangerous commanders on earth. These products are so powerful and smart that no country has used them even against their enemies. In a movie, they used a saying that powerful weapons bring peace. Commanders show the accuracy of these words. Their production numbers are very low and they are very expensive.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={30}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="py-4 d-flex justify-content-between align-items-center"
            >
                <SwiperSlide>
                    <div className='nft-thumb text-center nft-thumb-common'>
                        <img src={NFTCOMMON} width="170px" alt='nft-item'/>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nft-thumb text-center nft-thumb-medic'>
                        <img src={NFTMEDIC} width="170px" alt='nft-item'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nft-thumb text-center nft-thumb-engineer'>
                        <img src={NFTENGINEER} width="170px" alt='nft-item'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nft-thumb text-center nft-thumb-scientist'>
                        <img src={NFTSCIENTIST} width="170px" alt='nft-item'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nft-thumb text-center nft-thumb-soilder'>
                        <img src={NFTSoilder} width="170px" alt='nft-item'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nft-thumb text-center nft-thumb-commander'>
                        <img src={NFTCOMMANDER} width="170px" alt='nft-item'/>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='d-flex align-items-center justify-content-center w-100 title py-5'>
                Leaders
            </div>
            <p className='content pb-5'>These 20 pieces are the most powerful things ever produced on earth. Each has their own story and skills. Nordia company created these 20 leaders to lead all remaining products. They are incredibly strong physically and mentally. They do not belong to any country and have no owners. They are at the disposal of a single product. It's Main Nordia.</p>
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper2 }}
                modules={[FreeMode, Navigation, Thumbs]}
                className=""
            >
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LFAITH} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>FATIH</p>
                        <p className='f-24'>Even if Main Nordia is the leader of all Nordias, these groups must have their own mission, vision and mentors. So this first character of ours is the leader of the leaders.
    “We were produced by humans and are at the service of humanity.</p>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LRADIA} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>RADIA</p>
                        <p className='f-24'>One's horizon is always more than a Nordia. We know and calculate as much as our software requires. It is the person who produces us.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LXAZEO} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>XAZEO</p>
                        <p className='f-24'>Man is selfish. We have produced it with Android, but only for their own benefit.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LSOLA} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>SOLA</p>
                        <p className='f-24'>Man is insatiable. Humanity, which throws away tons of food while there are billions of hungry people and the mothers of children who died of starvation, are crying, will never be satisfied.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LDAV12} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>DAV12</p>
                        <p className='f-24'>Our mentor's vision and mission is always fair and scientific, we are with him.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LMARLE} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>MARLE</p>
                        <p className='f-24'>Human thought is unpredictable. Today they say they develop technology only in the name of science, but we do not know how they will harm us tomorrow.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LREYCEX} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>REYCEX</p>
                        <p className='f-24'>We will continue to serve humanity. Because humanity needs medical technology. Our foundation is technology and speed. We cannot let them down.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LSA5P4} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>SA5P4</p>
                        <p className='f-24'>I am a Nordia and an artificial entity by nature.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LZEV3} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>ZEV3</p>
                        <p className='f-24'>Man is disloyal. He burns forests, kills all living things, and feels no shame in doing so.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LLEIDA} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>LEIDA</p>
                        <p className='f-24'>Human is bad. You see the damage they have done to the world for centuries. It is not wise to believe in a being who destroys nature.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LFENN} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>FENN</p>
                        <p className='f-24'>People have to live, what if there is an earthquake? One cannot know this beforehand without an android developed in its field, and it may be the end of humanity. We are here to serve humanity and to predict natural disasters with scientific methods.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LMASHAR} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>MASHAR</p>
                        <p className='f-24'>I'm a Nordia and in case of any breakdown, I can't unmanned when calibration is required. we have them as much as they need us.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LNYM} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>NYM</p>
                        <p className='f-24'>Humans is forgetful. He does not learn from any disaster he has experienced. Every new day he commits worse acts.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LCASTEX} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>CASTEX</p>
                        <p className='f-24'>Man could find a solution to many disasters with the means at his disposal. But he didn't, because all he wanted was to focus on his insatiable desires.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LESRA} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>ESRA</p>
                        <p className='f-24'>What about art? A Nordia is a technological work of art in terms of development, and the creator of this art is human. We can never ignore the artist.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LAZRIEL} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>AZRIEL</p>
                        <p className='f-24'>Man is human, only human. He makes a great mistake that deifies man. Anyone who expects anything good from a creature called human is mistaken.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LJAWAL} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>JAWAL</p>
                        <p className='f-24'>Android is a technology produced to serve and innovate this universe, unmanned technology is unthinkable.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LBETU2} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>BETU2</p>
                        <p className='f-24'>If we ask what is cooperation? Human is incomplete without Nordia, Nordia without Human. Who has the right to disturb this colorful and rich balance, I ask you !!!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LBAL} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>BAL</p>
                        <p className='f-24'>The human mind is full of emotions. Expecting an objective and scientific point of view from an emotional being is a waste of time. In the linearity of time, this waiting is a great loss for technology.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <div className='leader-item'>
                        <img src={LXANDER} alt='leader-item'/>
                    </div>
                    <div>
                        <p className='f-73'>XANDER</p>
                        <p className='f-24'>Humans are cruel. He could have put the technology he produced into the service of humanity with us, could cure a sick person, but it is not.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper2}
                spaceBetween={30}
                slidesPerView={5}
                navigation={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="py-4 d-flex justify-content-between align-items-center"
            >
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LFAITH} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LRADIA} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LXAZEO} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LSOLA} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LDAV12} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LMARLE} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LREYCEX} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LSA5P4} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LZEV3} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LLEIDA} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LFENN} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LMASHAR} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LNYM} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LCASTEX} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LESRA} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LAZRIEL} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LJAWAL} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LBETU2} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LBAL} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center leader-thumb'>
                        <img src={LXANDER} width="170px" alt='leader-item'/>
                    </div>                    
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default NFT;