import "./Footer.css"
const  Footer = () => {
    return(
        <div className="Footer">
            <div className="top">
                <div className="logo">
                <h1 className="navbar-logo"><span><b><span>T</span></b>ravel</span>-<b>G</b>o</h1>
                <p>Choose Your Favorite Destination</p>
                </div>
                <div className="socialMidea">
                    <a href="./"><i className="fa-brands fa-facebook-square"></i></a>

                    <a href="./"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="./"><i className="fa-brands fa-twitter-square"></i></a>
                    <a href="./"><i class="fa-brands fa-linkedin"></i></a>
                </div>

            </div>
            <div className="bottom">
                <div className="first">
                    <h4>Project</h4>
                    <a href="./">Changelog</a>
                    <a href="./">Status</a>
                    <a href="./">License</a>
                    <a href="./">All Version</a>

                </div>
                <div className="second">
                    <h4>Community</h4>
                    <a href="./">GitHub</a>
                    <a href="./">Issues</a>
                    <a href="./">Project</a>
                    <a href="./">Twitter</a>

                </div>
                <div className="third">
                    <h4>Help</h4>
                    <a href="./">Support</a>
                    <a href="./">Trobleshooting</a>
                    <a href="./">Contact Us</a>
        

                </div>
                <div className="fourth">
                    <h4>Other</h4>
                    <a href="./">Terms Of Service</a>
                    <a href="./">Privocy Policy</a>
                    <a href="./">License</a>
                </div>

            </div>
        </div>
    )
}
export default Footer;