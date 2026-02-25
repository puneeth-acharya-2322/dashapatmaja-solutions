import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="section-gap">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="footer-block">
                        <div className="footer-brand-block">
                            <Link aria-label="Logo" to="/" className="footer-brand w-inline-block">
                                <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/69368a5646568096095bb918/6936a643804cd42e894bcdde_d10e6604bf1e88d7cf857b091f8a974d_Logo.svg"
                                    alt="MNC"
                                    className="footer-brand-logo"
                                />
                            </Link>
                            <div className="footer-except">
                                A global, diversified company building solutions across technology, energy, logistics, finance, and consumer products.
                            </div>
                            <div className="footer-social-block">
                                <a href="https://www.facebook.com/TNCFlow" aria-label="Facebook" target="_blank" rel="noreferrer" className="footer-social w-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="footer-social-icon"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
                                </a>
                                <a href="https://x.com/TNCFlow" aria-label="X (Twitter)" target="_blank" rel="noreferrer" className="footer-social w-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="footer-social-icon"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/tncflow" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="footer-social w-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="footer-social-icon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
                                </a>
                                <a href="https://www.instagram.com/tncflow" aria-label="Instagram" target="_blank" rel="noreferrer" className="footer-social w-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="footer-social-icon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
                                </a>
                                <a href="https://www.youtube.com/@TNCFlow" aria-label="YouTube" target="_blank" rel="noreferrer" className="footer-social w-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="footer-social-icon"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-nav-block">
                            <div className="footer-nav-wrap">
                                <div className="footer-nav-title">Navigation</div>
                                <div className="footer-nav-links">
                                    <Link to="/" className="footer-nav-link">Home</Link>
                                    <Link to="/about-us" className="footer-nav-link">About Us</Link>
                                    <Link to="/solutions" className="footer-nav-link">Solutions</Link>
                                    <Link to="/investors" className="footer-nav-link">Investors</Link>
                                    <Link to="/contact-us" className="footer-nav-link">Contact Us</Link>
                                </div>
                            </div>
                            <div className="footer-nav-wrap">
                                <div className="footer-nav-title">Contact</div>
                                <div className="footer-nav-links">
                                    <a href="tel:(012)345-6789" className="footer-nav-link">(012) 345-6789</a>
                                    <a href="mailto:support@example.com" className="footer-nav-link">support@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-block">
                        <div className="footer-copyright">
                            © {new Date().getFullYear()} MNC. All rights reserved.
                        </div>
                        <div className="footer-utility-links">
                            <Link to="/utility/style-guide" className="footer-utility-link">Style Guide</Link>
                            <Link to="/utility/change-log" className="footer-utility-link">Change-Log</Link>
                            <Link to="/utility/license" className="footer-utility-link">License</Link>
                            <Link to="/404" className="footer-utility-link">404</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
