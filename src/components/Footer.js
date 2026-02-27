import "../components/Css/Footer.css"
import Logo from "../assets/WhatsApp_Image_2026-02-03_at_06.37.15-removebg-preview.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Company Info */}
                    <div className="footer-section company-info">
                        <div className="footer-logo">
                            <img src={Logo} alt="AXSSEL Logo" className="footer-logo-img" />
                        </div>
                        <p className="footer-description">
                            Specializing in configuring and selling AI bots for business automation.
                            Empowering companies with intelligent, customized solutions.
                        </p>
                        <div className="social-links">
                            <button className="social-link" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="social-link" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                            <button className="social-link" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </button>
                            <button className="social-link" aria-label="Discord">
                                <i className="fab fa-discord"></i>
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Resources</h3>
                        <ul className="footer-links">
                            <li><a href="#docs">Documentation</a></li>
                            <li><a href="#api">API Reference</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#support">Support</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-section newsletter">
                        <h3 className="footer-heading">Stay Updated</h3>
                        <p className="newsletter-text">
                            Subscribe to our newsletter for the latest AI insights and updates.
                        </p>
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © 2026 AXSSEL. All rights reserved.
                        </p>
                        <div className="legal-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#cookies">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;