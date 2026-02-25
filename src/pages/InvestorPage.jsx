import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function InvestorPage() {
    const { slug } = useParams()
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)
    const name = slug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Investment Fund'

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet><title>{name} - MNC Investors</title></Helmet>
            <div id="go-top"></div>
            <Header />
            <div className="main-wrapper">
                <section className="page-hero-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="page-hero-block">
                                <div className="section-tag-block">
                                    <div className="section-tag">
                                        <Link to="/" className="section-tag-link">Home</Link>
                                        <div className="section-tag-slash">/</div>
                                        <Link to="/investors" className="section-tag-link">Investors</Link>
                                        <div className="section-tag-slash">/</div>
                                        <div className="section-tag-text">{name}</div>
                                    </div>
                                </div>
                                <h1 data-scroll-anim className="page-hero-title">{name}</h1>
                                <div data-scroll-anim className="page-hero-except">
                                    Detailed investment fund information, performance data, and how to participate.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="cta-block">
                                <div className="cta-text-block">
                                    <h2 className="cta-title">Interested in This Fund?</h2>
                                    <div className="cta-except">Contact our investment team to learn more about participation requirements and opportunities.</div>
                                </div>
                                <div className="cta-button-block">
                                    <Button to="/contact-us" variant="dark">Contact Investment Team</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <a href="#go-top" className="go-top-wrap w-inline-block"><div className="go-top-text">Go To Top</div></a>
            <Footer />
        </div>
    )
}
