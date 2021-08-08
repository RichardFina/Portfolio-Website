import { useState } from "react";
import "./portfolio.scss"

export default function Portfolio() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "CryptoTracker App",
          desc:
            "Cryptocurrecncy application that tracks price metrics with CoinMarketCap API integration. Designed for Android and written in Java.",
          projects:
            "CryptoTracker",
          img:
            "https://camo.githubusercontent.com/43ea9c7e20efb763ccf9ddb7ec76ccf7f649dcffe11c8e4ff86dd16ee0929170/68747470733a2f2f692e696d6775722e636f6d2f316431427073382e706e67",
        },
        {
          id: "2",
          icon: "./assets/game.png",
          title: "Brink",
          desc:
            "A sidescroller game with inspiration from retro platformers such as Metal Slug. Made with Unity and written in C#.",
          projects:
            "CryptoTracker",
          img:
            "https://i.imgur.com/k8iEGpB.png",
        },
        {
          id: "3",
          icon: "./assets/globe.png",
          title: "richardfina.dev",
          desc:
            "React application that integrates various libraries and frameworks to showcase technical skills and understanding of web applications and supportive technologies.",
          projects:
            "CryptoTracker",
          img:
            "https://i.imgur.com/sJNDtXH.png",
        },
    ];

    const handleClick = (way) => {
        way === "left" 
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)  
          : setCurrentSlide(currentSlide < data.length - 1 ?  currentSlide + 1 : 0);
    };

    return (
        <div className="portfolio" id="portfolio">
                
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            {data.map((d) => ( 
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                {/* <span>Projects</span>
                                <p>
                                    {d.projects}
                                </p> */}
                            </div>
                        </div>
                        <div className="right">
                        <img
                          src={d.img}
                          alt=""
                        />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
            )</div>
    );
}
