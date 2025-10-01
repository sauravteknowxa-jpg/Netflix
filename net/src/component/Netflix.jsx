import { useState } from "react";
import "./style.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Netflix() {
    const [activeId, setActiveId] = useState(null);

    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };

  return (
    <>
        <div 
          className="w-full  bg-cover bg-center bg-no-repeat py-6 sm:py-10 lg:py-20"
          style={{backgroundImage:"url('/image/netflix.jpg')" }}>

            <header className="flex flex-row items-center justify-between w-full px-4 sm:px-8 md:px-12 lg:px-50 py-6">
                <span className="text-red-600 sm:text-2xl lg:text-6xl font-bold">NETFLIX</span>
                <div className="flex flex-row items-center gap-4">
                    <select name="" id="" className="text-white bg-black px-6 py-3 rounded-sm sm:text-sm lg:text-lg font-semibold border-2 border-gray-400">
                        <option value="1" className="cursor-pointer">English</option>
                        <option value="2" className="cursor-pointer">Hindi</option>
                    </select>
                    <button className="text-white bg-red-600 px-6 py-3 rounded-sm sm:text-sm lg:text-lg font-semibold">Sign In</button>
                </div>
            </header>

            <div className="w-full mt-36">
                <div className="flex flex-col items-center justify-center text-center mt-20 px-4 sm:px-8 md:px-20 lg:px-72">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold mb-12">Unlimited movies, TV shows and more.</h1>
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">Starts at ₹149. Cancel at any time.</h2>
                    <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-12">Ready to watch? Enter your email to create or restart your membership.</p>  
                    <div className="flex flex-col items-center justify-center text-center mt-6 px-4 sm:px-8 md:px-16 ">
                       <div className="flex flex-col sm:flex-row items-center w-full">
                            <input type="text" placeholder="Email address" className="text-gray-800 bg-slate-400 w-full sm:w-auto px-4 py-3 rounded-sm text-lg sm:text-xl lg:text-2xl  mb-4 sm:mb-0"/>
                            <button className="text-white bg-red-600 px-6 py-3 rounded-sm text-lg sm:text-xl lg:text-2xl font-semibold ml-0 sm:ml-4 w-full sm:w-auto">Get Started &gt;</button>
                        </div>
                    </div>      
                </div>
            </div>         
        </div>

        <div className="w-full bg-black flex flex-col items-start justify-start gap-6 text-center px-4 sm:px-8 md:px-8 lg:px-48 py-8 lg:py-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ">Trending Now</h2>
             <div className="w-full mx-auto  ">
                <Slider {...settings}>
                        <div className="px-2">
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <img src="/image/bads.webp" alt="Movie 1" className="w-full h-64 object-cover"/>
                            </div>
                        </div>
                        
                        <div className="px-2">
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <img src="/image/dhadak.webp" alt="Movie 2" className="w-full h-64 object-cover"/>
                            </div>
                        </div>
                        
                        <div className="px-2">
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <img src="/image/narshima.webp" alt="Movie 3" className="w-full h-64 object-cover"/>
                            </div>
                        </div>
                        
                        <div className="px-2">
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <img src="/image/wed.webp" alt="Movie 4" className="w-full h-64 object-cover"/>
                            </div>
                        </div>                 
                </Slider>
             </div>
        </div>



        <div className="w-full bg-black flex flex-col items-start justify-start gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-24 py-8 lg:py-12">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">More reasons to join </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 items-center justify-start gap-6 w-full">
                <div className="bg-[#1D1830] flex flex-col items-start justify-start gap-4 rounded-xl p-2 sm:px-4 md:px-6 lg:px-10 py-6 h-full">
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-bold text-wrap">Enjoy on your TV.</h2>
                    <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl text-left font-normal text-wrap">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>

                <div className="bg-[#1D1830] flex flex-col items-start justify-start gap-4 rounded-xl p-2 sm:px-4 md:px-6 lg:px-10 py-6 h-full">                    
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-bold text-wrap">Download and go.</h2>
                    <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl text-left font-normal text-wrap">Save your favourites easily and always have something to watch.</p>
                </div>

                <div className="bg-[#1D1830] flex flex-col items-start justify-start gap-4 rounded-xl p-2 sm:px-4 md:px-6 lg:px-10 py-6 h-full">                   
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-bold text-wrap">Watch everywhere.</h2>
                    <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl text-left font-normal text-wrap">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying more.</p>
                </div>

                <div className="bg-[#1D1830] flex flex-col items-start justify-start gap-4 rounded-xl p-2 sm:px-4 md:px-6 lg:px-10 py-6 h-full">                   
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-bold text-wrap">Create profiles for kids.</h2>
                    <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl text-left font-normal text-wrap">Send kids on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div> 

            </div>
        </div>


        <div className="w-full bg-black flex flex-col items-start justify-start gap-6 text-center px-4 sm:px-8 lg:px-48 py-4 lg:py-12">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions </h1>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <div 
                className="w-full bg-gray-800 text-white px-4 py-6 rounded-sm flex flex-row items-center justify-between cursor-pointer"
                id="1"
                onClick={() => setActiveId(activeId=== "1" ? null : "1")}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">What is Netflix?</h2>
                    <span className="text-3xl font-bold" >{activeId=== "1" ? "X" : "+"}</span>
                </div>
                {activeId === "1" && (
                    <div className="w-full bg-gray-700 text-white px-4 py-6 rounded-sm">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">  
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </p>
                    </div>
                )
                }
                <div 
                className="w-full bg-gray-800 text-white px-4 py-6 rounded-sm flex flex-row items-center justify-between cursor-pointer"
                id="2"
                onClick={() => setActiveId(activeId=== "2" ? null : "2")}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">How much does Netflix cost?</h2>
                    <span className="text-3xl font-bold" >{activeId=== "2" ? "X" : "+"}</span>
                </div>
                {activeId === "2" && (
                    <div className="w-full bg-gray-700 text-white px-4 py-6 rounded-sm">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">  
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                        </p>
                    </div>
                )
                }
                <div 
                className="w-full bg-gray-800 text-white px-4 py-6 rounded-sm flex flex-row items-center justify-between cursor-pointer"
                id="3"
                onClick={() => setActiveId(activeId=== "3" ? null : "3")}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">Where can I watch?</h2>
                    <span className="text-3xl font-bold" >{activeId=== "3" ? "X" : "+"}</span>
                </div>
                {activeId === "3" && (
                    <div className="w-full bg-gray-700 text-white px-4 py-6 rounded-sm">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">  
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        </p>
                    </div>
                )
                }
                <div 
                className="w-full bg-gray-800 text-white px-4 py-6 rounded-sm flex flex-row items-center justify-between cursor-pointer"
                id="4"
                onClick={() => setActiveId(activeId=== "4" ? null : "4")}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">How do I cancel?</h2>
                    <span className="text-3xl font-bold" >{activeId=== "4" ? "X" : "+"}</span>
                </div>
                {activeId === "4" && (
                    <div className="w-full bg-gray-700 text-white px-4 py-6 rounded-sm">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">  
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.

                        </p>
                    </div>
                )
                }
                <div 
                className="w-full bg-gray-800 text-white px-4 py-6 rounded-sm flex flex-row items-center justify-between cursor-pointer"
                id="5"
                onClick={() => setActiveId(activeId === "5" ? null : "5")}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">What can I watch on Netflix?</h2>
                    <span className="text-3xl font-bold" >{activeId=== "5" ? "X" : "+"}</span>
                </div>
                {activeId === "5" && (
                    <div className="w-full bg-gray-700 text-white px-4 py-6 rounded-sm">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">  
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.

                        </p>
                    </div>
                )
                }
                <div 
                className="w-full bg-gray-800 text-white px-4 py-6 rounded-sm flex flex-row items-center justify-between cursor-pointer"
                id="6"
                onClick={() => setActiveId(activeId === "6" ? null : "6")}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">Is Netflix good for kids?</h2>
                    <span className="text-3xl font-bold" >{activeId=== "6" ? "X" : "+"}</span>
                </div>
                {activeId === "6" && (
                    <div className="w-full bg-gray-700 text-white px-4 py-6 rounded-sm">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">  
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.

                        </p>
                    </div>
                )
                }
            </div>
        </div>


        <div className=" bg-black flex flex-col items-center justify-center gap-6 text-center px-4 sm:px-8 md:px-48 lg:px-96 py-8 lg:py-12">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal ">Ready to watch? Enter your email to create or restart your membership.</p> 
        </div>
        <div className=" w-full bg-black flex flex-col items-center justify-center text-center gap-2 px-4 sm:px-8 md:px-16 py-4 ">
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full">
                                <input type="text" placeholder="Email address" className="text-gray-800 bg-slate-400 w-full sm:w-auto px-4 py-3 rounded-sm text-lg sm:text-xl lg:text-2xl  mb-4 sm:mb-0"/>
                                <button className="text-white bg-red-600 px-6 py-3 rounded-sm text-lg sm:text-xl lg:text-2xl font-semibold ml-0 sm:ml-4 w-full sm:w-auto">Get Started &gt;</button>
                    </div>
        </div>
        

        
        <footer className="w-full bg-black py-6 sm:py-10 lg:py-20">
               <div className="flex flex-col items-start justify-start text-center mt-6 px-4 sm:px-8 md:px-12 lg:px-40 ">             
                    <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-12">Questions? Call 000-800-040-1843</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4 w-full">
                        <div className="flex flex-col items-start justify-start ">
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">FAQ</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Investor Relations</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Privacy</a> 
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Speed Test</a>
                        </div>
                        
                        <div className="flex flex-col items-start justify-start ">
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Help Center</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Jobs</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Cookie Preferences</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Legal Notices</a>
                        </div>

                        <div className="flex flex-col items-start justify-start ">
                            <a href="#" className="text-gray-300 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Account</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Ways to Watch</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Corporate Information</a>
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Only on Netflix</a>
                        </div>
                        
                        <div className="flex flex-col items-start justify-start ">
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Media Center</a>           
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Terms of Use</a>                      
                            <a href="#" className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mb-4">Contact Us</a>                     
                        </div>
                                             
                    </div>
                    <select name="" id="" className="mt-12 mb-1 text-white bg-black px-6 py-3 rounded-sm sm:text-sm lg:text-lg font-semibold border-2 border-gray-400">
                        <option value="1" className="cursor-pointer">English</option>
                        <option value="2" className="cursor-pointer">Hindi</option>
                    </select>
                    <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-normal mt-12">Netflix India</p>
                    <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-xl font-normal mt-12">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500">Learn more.</span> </p>
                </div>   
        </footer>
        
    </> 
    );
}

export default Netflix;