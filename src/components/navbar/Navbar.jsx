import "./navbar.scss"
import {Mail} from "@material-ui/icons"
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#introduction" className="logo">&lt;/design&gt;</a>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon"/>
                        <span><a href="https://www.linkedin.com/in/fina-508209/" target="_blank" rel="noreferrer">in/fina-508209</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span><a href="#contact">pyth0n@tuta.io</a></span>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
