import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function NotFound() {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>404 - Page Not Found | MNC</title>
            </Helmet>
            <div id="go-top"></div>
            <Header />
            <div className="main-wrapper">
                <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                    <div className="w-layout-blockcontainer container-default w-container" style={{ textAlign: 'center', padding: '80px 20px' }}>
                        <div className="section-tag-block" style={{ justifyContent: 'center', display: 'flex', marginBottom: '24px' }}>
                            <div className="section-tag">Error 404</div>
                        </div>
                        <h1 className="page-hero-title" style={{ marginBottom: '24px' }}>Page Not Found</h1>
                        <p style={{ opacity: 0.65, maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7, fontSize: '1.1rem' }}>
                            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                            <Button to="/" variant="dark">Go Home</Button>
                            <Button to="/contact-us">Contact Us</Button>
                        </div>
                    </div>
                </section>
            </div>
            <a href="#go-top" className="go-top-wrap w-inline-block"><div className="go-top-text">Go To Top</div></a>
            <Footer />
        </div>
    )
}
