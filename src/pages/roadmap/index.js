import React, {useState} from 'react';
import { isMobile } from 'react-device-detect';
// import "./home.css";

const RoadMap = (props) => {
    const [mode, setMode] = useState(0);
    const imageNames = ['', 'p-vision.png', 'p-collaboration.png', 'p-3d-artist.png', 'p-trading.png', 'p-t-shirt.png', 'p-folder.png'];
    return (
        <div className={`saira-stencil-one main-content d-flex flex-wrap flex-lg-nowrap text-black ${isMobile? '': 'position-relative'}`}>
            <div className={`background roadmap-bg`}></div>
            <div className='d-flex w-100 flex-wrap flex-md-nowrap p-2'>
                <div className='d-flex flex-column m-2 w-100'>
                    <div className='flex-fill pb-2'>
                        <div className='btn roadmap-item' onClick={() => {setMode(1);}}>
                            <div className='f-40  text-uppercase'>Vision</div>
                            <img src={'/images/vision.png'} className='roadmap-img' alt='roadmap-img'/>
                            <div className='roadmap-number f-40 text-uppercase'>01</div>
                        </div>
                    </div>
                    <div className='flex-fill pt-2'>
                        <div className='btn roadmap-item' onClick={() => {setMode(2);}}>
                            <div className='roadmap-team-title'>TEAM</div>
                            <div className='roadmap-team-subtitle'>& Community</div>
                            <img src={'/images/collaboration.png'} className='roadmap-img' alt='roadmap-img'/>
                            <div className='roadmap-number f-40 text-uppercase'>02</div>

                        </div>
                    </div>
                </div>
                <div className='d-flex w-100 m-2'>
                    <div className='btn roadmap-item' onClick={() => {setMode(3);}}>
                        <div className='roadmap-nft-title'>NFT</div>
                        <div className='roadmap-nft-subtitle'>Launch</div>
                        <img src={'/images/3d-artist.png'} className='roadmap-img' alt='roadmap-img'/>
                        <div className='roadmap-number f-40 text-uppercase'>03</div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column w-100 p-2'>
                <div className='d-flex flex-fill pb-2'>
                    <div className='w-100 pe-2'>
                        <div className='btn roadmap-item' onClick={() => {setMode(4);}}>
                            <div className='roadmap-token-title'>Token</div>
                            <img src={'/images/trading.png'} className='roadmap-img' alt='roadmap-img'/>
                            <div className='roadmap-number f-40 text-uppercase'>04</div>
                        </div>
                    </div>
                    <div className='w-100 ps-2'>
                        <div className='btn roadmap-item' onClick={() => {setMode(6);}}>
                            <div className='roadmap-p2e-title'>P2E</div>
                            <div className='roadmap-p2e-subtitle'>GAME</div>
                            <img src={'/images/folder.png'} className='roadmap-img' alt='roadmap-img'/>
                            <div className='roadmap-number f-40 text-uppercase'>06</div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-fill pt-2'>
                    <div className='btn roadmap-item' onClick={() => {setMode(5);}}>
                        <div className='roadmap-token-title'>Tangible</div>
                        <div className='roadmap-tangible-subtitle'>Works</div>
                        <img src={'/images/t-shirt.png'} className='roadmap-img' alt='roadmap-img'/>
                        <div className='roadmap-number f-40 text-uppercase'>05</div>
                    </div>
                </div>
            </div>
            {mode !== 0 && <div className='rm-popup roboto-mono d-flex flex-column'>
                <div className='btn btn-rm-close' onClick={() => {setMode(0);}}> <i className="fas fa-times"></i></div>
                <div className='popup-title'>{mode === 1? 'Vision': mode === 2? 'Team & Community': mode === 3? 'NFT launch': mode === 4? 'Token': mode === 5? 'Tangible Works': mode === 6? 'P2E Game':''}</div>
                <img src={`/images/${imageNames[mode]}`} className='popup-img' alt='popup-img'/>
                <div className='flex-fill overflow-auto'>
                    {mode === 1 && <div className='popup-content pt-3'>
                    Building a stable future. Our goal is to create a Web3 brand and ecosystem that is accepted by our members or everyone by creating a chain of DeFi, Nordia NFTs and P2E.
                    We are taking firm steps along this path to provide benefits to our members due to their support. Our project, which is developing day by day, has always kept its goal at the top since the first day. Our purpose is create an ecosystem that you can make money while you are having fun. Our ecosystem is based on a happy future. Check out our Ecosystem Roadmap for more.<br/>
                    The mission we have is progressing to ensure extra earning programs that collectors and the crypto community can also use. Certainly, our first goal is to create a community for the construction of the future. We do not work for only creating an NFT collection or Token brand, but also for creating an Ecosystem. Remember, you can make the biggest investment for the future.<br/>

                    We are proceeding with our community. Moving forward on the common path is the most favorable for our future. Therefore, this future that we are building together with our community will undoubtedly be great.<br/>
                    While we are doing all of these, our members will be able to build, have fun, earn money and connect with thousands of people that alike themselves. Imagine  that you are guided by the scenario of the future and finally you can live in that world, we're creating this.<br/>
                    Nordia For The Future is undoubtedly a long-term project. We are working to make you feel this world even without the Internet. These are the designs of the future that we are building. A world that will exist over the time.<br/>
                    We want to create an impeccable ecosystem by having many utilities in it.<br/>
                    We want to take Nordia For Future to advanced levels. 
        
                    </div>}
                    {mode === 2 && <div className='popup-content pt-3'>
                        <div>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                    MAIN TEAM:
                                </div>    
                                <div className='status status-success'>
                                    Complete
                                </div>
                            </div>
                            <div>
                            Our team consists of web3 developers, social media managers and Token experts. They are doing their best to create the future and share it with you.
These people exist to move the Ecosystem forward day by day.
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                DESIGNER TEAM:
                                </div>    
                                <div className='status status-success'>
                                    Complete
                                </div>
                            </div>
                            <div>
                            Our team of website designers and artists, who are experts in their fields, are creating content for our community under the roof of NFF every day and draw their own roadmaps according to the feedback from community.
They work full time within the NFF Ecosystem. And they will be the chief architects of many of the innovations we will make in the future.
                    </div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                MODERATION TEAM:
                                </div>    
                                <div className='status status-updating'>
                                    Complete
                                </div>
                            </div>
                            <div>
                            Our mods lead the way to grow and protect the NFF community.
Our Large Mod team works part-time or full-time with certain hours.
Our mod team, which consists of experts in the field of NFT and DeFi, also undertakes the communication of our Community.
                            </div>
                        </div>
                        
                    </div>}
                    {mode === 3 && <div className='popup-content pt-3'>
                        <div>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                BIG BANG:
                                </div>    
                                <div className='status status-ready'>
                                    Ready
                                </div>
                            </div>
                            <div>
                            The Nordia For Future NFT Collection, consisting of 6 classes and 10,021 pieces, is prepared by our artists and presented to the community. Each member carries their own Nordia For Future NFT(s).<br/>                            
                            </div>
                            <div className='pt-3'>Each nft that is created has an important role in the Nordia Ecosystem.</div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                NFT Smart Contract:
                                </div>    
                                <div className='status status-success'>
                                    Complete
                                </div>
                            </div>
                            <div>
                            3 smart contracts were written for 3 different sales processes. These contracts provide security, fast and cheap transaction fees.
                            </div>
                        </div>
                        
                    </div>}
                    {mode === 4 && <div className='popup-content pt-3'>
                        <div>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                CONTRACTS:
                                </div>    
                                <div className='status status-success'>
                                Complete
                                </div>
                            </div>
                            <div>
                            We have 5 smart contracts in total, all of which are transparently presented to our community. After testing the sustainable token economy a lot, we brought together our expert token team and lawyers and this team has demonstrated that it has legal compliance.
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                Passive Daily Earnings: 
                                </div>    
                                <div className='status status-ready'>
                                Ready
                                </div>
                            </div>
                            <div>
                            The biggest incentive for the Nordia For Future ecosystem to grow and new members to join will undoubtedly be to earn passive daily NRD Coin rewards.
NRD coin will be the main currency of the ecosystem and they can be exchanged with other cryptocurrencies.
                            </div>
                        </div>
                        
                    </div>}
                    {mode === 5 && <div className='popup-content pt-3'>
                        <div>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                Nordia Fashion:
                                </div>    
                                <div className='status status-drawing'>
                                Drawing
                                </div>
                            </div>
                            <div>
                            As NFF brand, we step into street wear and fashion. We produce conceptual clothing, jewelry, accessories and futuristic icon products in many areas. They will be fully wearable and displayable to the whole world.
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                Modern Agriculture:
                                </div>    
                                <div className='status status-ready'>
                                Under Construction
                                </div>
                            </div>
                            <div>
                            We are going to build fields and planting areas that you can fully monitor remotely. with small structures
We are trying to start and make them sustainable. We can handle all works such as harvesting, planting and spraying without even getting close to the soil. This is possible.
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                Architectural Change:
                                </div>    
                                <div className='status status-plan'>
                                Plan
                                </div>
                            </div>
                            <div>
                            We are forming a large department under the name of NFF Brand from minimal builds to big jobs
most will do architectural ventures. In addition to these, we will be serving the whole world.
                            </div>
                        </div>
                    </div>}
                    {mode === 6 && <div className='popup-content pt-3'>
                        <div>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                Characters:
                                </div>    
                                <div className='status status-processing'>
                                Processing
                                </div>
                            </div>
                            <div>
                            There are 10,020 unique characters made for players, consisting of 7 different classes in total. You can now get your characters in 2D as NFT, but each character is prepared in 3D for the game. Characters are open to upgrade.
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='subtitle'>
                                Nordia Cards:
                                </div>    
                                <div className='status status-drawing'>
                                Drawing
                                </div>
                            </div>
                            <div>
                            Specially designed and produced for the Nordia P2E game, the cards will strengthen your character in the game.
We will share much more information about these and the map with our community in the coming weeks.
                            </div>
                        </div>
                    </div>}
                </div>
                
            </div>}
        </div>
    )
}
export default RoadMap;