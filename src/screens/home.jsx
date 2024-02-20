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

function HomeScreen() {
    const OpenMenu = () => {
        document.getElementById("mobile").style.display = "block"
        document.getElementById("open-menu").style.display = "none"
    }
    const CloseMenu = () => {
        document.getElementById("mobile").style.display = "none"
        document.getElementById("open-menu").style.display = "initial"
    }

    return (
        <div className="home-box">
            <nav>
                <section>
                <img src={Logo} alt="logo" />
                <ul>
                    <li id="feat">Features <span><img src={Down} /> <img src={Up} /></span> </li>
                        <div className="dropdown">
                            <p>To-do</p>
                            <p>Calendar</p>
                            <p>Reminder</p>
                            <p>Planning</p>
                        </div>
                    <li id="comp">Company <span><img src={Down} /> <img src={Up} /></span></li>
                    <div className="dropdown">
                            <p>History</p>
                            <p>Our Team</p>
                            <p>Blog</p>
                        </div>
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
                    <li id="feat">Features <span><img src={Down} /> <img src={Up} /></span> </li>
                        <div className="dropdown">
                            <p>To-do</p>
                            <p>Calendar</p>
                            <p>Reminder</p>
                            <p>Planning</p>
                        </div>
                    <li id="comp">Company <span><img src={Down} /> <img src={Up} /></span></li>
                    <div className="dropdown">
                            <p>History</p>
                            <p>Our Team</p>
                            <p>Blog</p>
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
                <div className="hero">
                    <img src={Hero} />
                </div>
            </main>
        </div>
    )
}

export default HomeScreen;