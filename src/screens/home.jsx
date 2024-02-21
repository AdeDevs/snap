import Logo from "../assets/logo.png"
import Up from "../assets/icon-arrow-up.png"
import Down from "../assets/icon-arrow-down.png"
import Menu from "../assets/icon-menu.png"
import Close from "../assets/icon-close-menu.png"
import Meet from "../assets/client-meet.png"
import Maker from "../assets/client-maker.png"
import Databiz from "../assets/client-databiz.png"
import Audiophile from "../assets/client-audiophile.png"
import Hero from "../assets/image-hero-desktop.png"
import HeroMobile from "../assets/image-hero-mobile.png"
import Calendar from "../assets/icon-calendar.png"
import ToDo from "../assets/icon-todo.png"
import Reminder from "../assets/icon-reminders.png"
import Plan from "../assets/icon-planning.png"

function HomeScreen() {
    const OpenMenu = () => {
        document.getElementById("mobile").style.display = "block"
        document.getElementById("open-menu").style.display = "none"
    }
    const CloseMenu = () => {
        document.getElementById("mobile").style.display = "none"
        document.getElementById("open-menu").style.display = "initial"
    }
    const FeatDrop = () => {
        document.getElementById("mob-dropdown").style.display = "block"
        document.getElementById("mob-dropdown-2").style.display = "none"
        document.getElementById("mob-feat-close").style.display = "block"
        document.getElementById("mob-feat-close").style.color = "black"
        document.getElementById("mob-feat").style.display = "none"
        document.getElementById("mob-up").style.display = "inline"
        document.getElementById("mob-down").style.display = "none"
    }
    const CompDrop = () => {
        document.getElementById("mob-dropdown-2").style.display = "block"
        document.getElementById("mob-dropdown").style.display = "none"
        document.getElementById("mob-comp-close").style.display = "block"
        document.getElementById("mob-comp-close").style.color = "black"
        document.getElementById("mob-comp").style.display = "none"
        document.getElementById("mob-up2").style.display = "inline"
        document.getElementById("mob-down2").style.display = "none"
    }
    const FeatClose = () => {
        document.getElementById("mob-dropdown").style.display = "none"
        document.getElementById("mob-feat-close").style.display = "none"
        document.getElementById("mob-feat").style.display = "block"
    }
    const CompClose = () => {
        document.getElementById("mob-dropdown-2").style.display = "none"
        document.getElementById("mob-comp-close").style.display = "none"
        document.getElementById("mob-comp").style.display = "block"
    }
    return (
        <div className="home-box">
            <nav>
                <section>
                <img src={Logo} alt="logo" />
                <ul>
                    <li id="feat">Features <span><img id="down" src={Down} /> <img id="up" src={Up} /></span> 
                        <div className="dropdown">
                            <a href="#"><span><img src={ToDo} alt="" /></span> To-do</a>
                            <a href="#"><span><img src={Calendar} alt="" /></span> Calendar</a>
                            <a href="#"><span><img src={Reminder} alt="" /></span> Reminder</a>
                            <a href="#"><span><img src={Plan} alt="" /></span> Planning</a>
                        </div>
                    </li>
                    <li id="comp">Company <span><img id="down" src={Down} /> <img id="up" src={Up} /></span>
                    <div className="dropdown-2">
                            <a href="#">History</a>
                            <a id="test" href="#">Our Team</a>
                            <a href="#">Blog</a>
                        </div>
                    </li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
                </section>

                <section>
                    <button>Login</button>
                    <button>Register</button>
                </section>
                <img id="open-menu" onClick={OpenMenu} src={Menu} alt="menu" />
            </nav>
            <div id="mobile">
                <nav>
                <img id="close-menu" onClick={CloseMenu} src={Close} alt="close" />
                <ul>
                    <li onClick={FeatDrop} id="mob-feat">Features <span><img id="mob-down" src={Down} /> <img id="mob-up" src={Up} /></span> </li>
                    <li id="mob-feat-close" onClick={FeatClose} >Features <span><img id="mob-down" src={Down} /> <img id="mob-up" src={Up} /></span> </li>
                        <div id="mob-dropdown">
                            <a href="#"><span><img src={ToDo} alt="" /></span> To-do</a>
                            <a href="#"><span><img src={Calendar} alt="" /></span> Calendar</a>
                            <a href="#"><span><img src={Reminder} alt="" /></span> Reminder</a>
                            <a href="#"><span><img src={Plan} alt="" /></span> Planning</a>
                        </div>
                    <li onClick={CompDrop} id="mob-comp">Company <span><img id="mob-down2" src={Down} /> <img id="mob-up2" src={Up} /></span></li>
                    <li id="mob-comp-close" onClick={CompClose}>Company <span><img id="mob-down2" src={Down} /> <img id="mob-up2" src={Up} /></span> </li>
                    <div id="mob-dropdown-2">
                            <a href="#">History</a>
                            <a id="test" href="#">Our Team</a>
                            <a href="#">Blog</a>
                        </div>
                    <li>Careers</li>
                    <li>About</li>
                </ul>

                <section className="buttons">
                    <button>Login</button>
                    <button>Register</button>
                </section>
                </nav>
            </div>
            <main>
                <img className="hero-mobile" src={HeroMobile} />
                <div>
                    <div>
                        <h1>Make <br /> remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button>Learn More</button>

                    <footer>
                        <ul>
                            <li><img src={Databiz} /></li>
                            <li><img src={Audiophile} /></li>
                            <li><img src={Meet} /></li>
                            <li><img src={Maker} /></li>
                        </ul>
                    </footer>
                    </div>
                    
                </div>
                <div className="hero">
                    <img src={Hero} />
                </div>
            </main>
        </div>
    )
}

export default HomeScreen;