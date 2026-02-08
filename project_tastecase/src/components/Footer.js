import "../components/Css/Footer.css"
import Logo from "../assets/WhatsApp_Image_2026-02-03_at_06.37.15-removebg-preview.png"
function Footer (){
    return(
        <section className="Footer">
            <div className="top-footer">
                <div className="top-Footer">
                    <div className="logo-wrapper">
                        <img className="footer-wrapper" src={Logo} alt="Footer logo" />
                    </div>
                    <div className="footer-info-wrapper">
                        <div className="Footer-first_layer">
                            <p className="Footer-para">About</p>
                            <p className="Footer-para">Home</p>
                            <p className="Footer-para">Pricing</p>
                            <p className="Footer-para">Service</p>
                            <p className="Footer-para">Contact</p>
                        </div>
                        <div className="Footer-first_layer">
                            <p className="Footer-para">Doqumentation</p>
                            <p className="Footer-para">FAQ</p>
                            <p className="Footer-para">Support</p>
                        </div>
                         <div className="Footer-first_layer">
                            <p className="Footer-para">X(Twitter)</p>
                            <p className="Footer-para">Linkedin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer-bottomWrapper">
                    <p className="Foter-para">Copyright © 2026 </p>
                    <p className="Foter-para">Privace Police</p>
                    <p className="Foter-para">Terms of Use</p>
                </div>
            </div>
        </section>
    )
}
export default Footer;