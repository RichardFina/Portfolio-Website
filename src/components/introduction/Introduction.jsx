import "./introduction.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Introduction() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 2000,
            backSpeed: 70,
            loop: false,
            strings: ["learn", "develop", "collaborate."],
        });
    }, [])

    return (
        <div className="introduction" id="introduction">
            <div className="main">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Richard Fina</h1>
                    <h3>Eager to <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
