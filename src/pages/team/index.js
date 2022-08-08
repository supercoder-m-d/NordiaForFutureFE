import React, {useCallback, useEffect, useState} from 'react';
// import "./home.css";

const Team = (props) => {
    return (
        <div className='roboto-mono main-content d-flex justify-content-start text-black'>
            <div className={`background team-bg`}></div>
            <img
                className='position-fixed team-image'
                src={'images/teamImage.png'}
                alt='item'
            />
            <div className='team-content pb-5'>
                <div className='f-73'>Team And Community</div>
                <div className='f-24 pb-3' style={{fontWeight: 700}}>MAIN TEAM</div>
                <div className='f-16 pb-3'>
                As of the date of this writing, our team consists more than 30 people who are working actively for Nordia For Future to achieve our goals.
Our team consists of expert artists, web3 developers, social consists of media managers and Token experts who are experts in their fields.
They do their best to create the future and represent it to you.
                </div>
                <div className='f-16 pb-5'>
The purpose of our team are to gather under one roof and to make future-oriented constructions. So we can experience all the process with all Nordia members.<br/>
We will build the future together. Nordia needs every single member. We will experience it together with those who believe in this project.
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-center py-2'>
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>FOUNDER</div>
                                <div className='text-center'>
                                    <img src={'/images/liderh.png'} alt='member-img'/>
                                </div>
                                
                            </div>
                            
                            <div className='memeber-name text-center'>
                                HAKANHADID
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/twticon-dark.png'} alt='link-icon'/>hadidhakan</div>
                                <div className='px-2 py-2'>
                                    He created the entire content of the Nordia For Future Ecosystem, the roadmap.
                                <br/>
                                    He continues to build the future.
                                </div>
                            </div>
                        </div>
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>FOUNDER</div>
                                <div className='text-center'>
                                    <img src={'/images/karacus ensar.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                                KARACUS
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/igicon-dark.png'} alt='link-icon'/>ensar.bos81</div>
                                <div className='px-2 py-2'>
                                He carried out the promotion of Nordia For Future, the management and upgrading of the community. 
                                <br/>
                                He is unique in his work.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap py-2'>
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>DESIGNER - GAME DEVELOPER</div>
                                <div className='text-center'>
                                    <img src={'/images/peaceoutrabbit.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            PEACEOUTRABBIT
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/inicon-dark.png'} alt='link-icon'/>hazaldemir1001</div>
                                <div className='px-2 py-2'>
                                She himself created the game fiction. At the same time, he directed the fashion for nordias in the project.

                                <br/>He is currently designing Nordias in 3d.
                                </div>
                            </div>
                        </div>
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>PERSONAL MANAGEMENT</div>
                                <div className='text-center'>
                                    <img src={'/images/kaan.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            KAAN
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/twticon-dark.png'} alt='link-icon'/>kaanmtinn</div>
                                <div className='px-2 py-2'>
                                He carried out the promotion of Nordia For Future, the management and upgrading of the community. 

                                <br/>He is unique in his work.
                                </div>
                            </div>
                        </div>

                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>Discord Management</div>
                                <div className='text-center'>
                                    <img src={'/images/balperr.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            balperr
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/igicon-dark.png'} alt='link-icon'/>balperr</div>
                                <div className='px-2 py-2'>
                                He performs the partnership and moderator management perfectly.
                                </div>
                            </div>
                        </div>

                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>SOCIAL MEDIA DESIGNER</div>
                                <div className='text-center'>
                                    <img src={'/images/deronika.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            DERONIKA
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/twticon-dark.png'} alt='link-icon'/>derooniika</div>
                                <div className='px-2 py-2'>
                                She's responsible for all the visuals you see. The content manager.
                                </div>
                            </div>
                        </div>
                    {/* </div> */}

                    {/* <div className='d-flex justify-content-center py-2'> */}
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>DESIGNER</div>
                                <div className='text-center'>
                                    <img src={'/images/buse.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            BUSE
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/igicon-dark.png'} alt='link-icon'/>_busepehlivan_/</div>
                                <div className='px-2 py-2'>
                                She's in charge of the undergarments of the Nordians. She has a huge share in their fashion.
                                </div>
                            </div>
                        </div>
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>DESIGNER</div>
                                <div className='text-center'>
                                    <img src={'/images/ophelia.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            OPHELIA
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/azicon-dark.png'} alt='link-icon'/>ceydamuti</div>
                                <div className='px-2 py-2'>
                                She formed the top clothing fashion of the Nordians. Different and beautiful designs adorn the Nordias.
                                </div>
                            </div>
                        </div>

                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>DISCORD ADMIN</div>
                                <div className='text-center'>
                                    <img src={'/images/init0.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            INIT0
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/discordicon-dark.png'} alt='link-icon'/>Nordia For Future</div>
                                <div className='px-2 py-2'>
                                Responsible for the happiness and safety of my unique community. Don't worry, he also spends time playing sports.
                                </div>
                            </div>
                        </div>

                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>BODY DESIGNER</div>
                                <div className='text-center'>
                                    <img src={'/images/maxinne.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            MAXINNE
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/inicon-dark.png'} alt='link-icon'/>duyguymmz</div>
                                <div className='px-2 py-2'>
                                She himself designed the Nordias in the closest way to people with a unique work.
They also design the characters and bodies of the leaders. Even we can't distinguish it as a brand.
                                </div>
                            </div>
                        </div>
                    {/* </div> */}

                    {/* <div className='d-flex justify-content-center py-2'> */}
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>SOCIAL MEDIA EXPERT</div>
                                <div className='text-center'>
                                    <img src={'/images/vixen.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            VIXEN
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/inicon-dark.png'} alt='link-icon'/>sevgiduymaz</div>
                                <div className='px-2 py-2'>
                                She forms the most important link between you and the Nordia Universe.
                                </div>
                            </div>
                        </div>
                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>HAIR DESIGNER</div>
                                <div className='text-center'>
                                    <img src={'/images/GenzoW.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            GENZOW
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/igicon-dark.png'} alt='link-icon'/>theguyobsessedwithbikes/</div>
                                <div className='px-2 py-2'>
                                She formed the top clothing fashion of the Nordians. Different and beautiful designs adorn the Nordias.
                                </div>
                            </div>
                        </div>

                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>DESIGNER</div>
                                <div className='text-center'>
                                    <img src={'/images/9 2.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            GAMZE
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/inicon-dark.png'} alt='link-icon'/>gamze-çolakoğlu-/</div>
                                <div className='px-2 py-2'>
                                The leaders are Main Nordia and the unique designer responsible for the top outfits of all the others.
We are so lucky to have her with us.
                                </div>
                            </div>
                        </div>

                        <div className='team-member position-relative'>
                            <div className='member-profile d-flex flex-column justify-content-between'>
                                <div className='member-role pt-1 px-1'>UI-UX DESIGNER</div>
                                <div className='text-center'>
                                    <img src={'/images/11.png'} alt='member-img'/>
                                </div>
                            </div>
                            
                            <div className='memeber-name text-center'>
                            NEYTIRI
                            </div>
                            <div className='member-detail px-1'>
                                <div className='member-link d-flex justify-content-center align-items-center'><img className='pe-1' src={'/images/discordicon-dark.png'} alt='link-icon'/>neytiri#6296</div>
                                <div className='px-2 py-2'>
                                She designed Nordia's website
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
                <div className='pt-5 f-24 pb-3'>WHO ARE WE , WILL WE MEET?</div>
                <div className='f-16'>We chose not to reveal our identities for now.The important thing here is not ones who manage, the important thing is the project, it is Nordia itself.
But this doesn't mean we can’t meet. Maybe we can do an event.
It's not our current plan, but we have it in mind.</div>
            </div>
        </div>
    )
}
export default Team;