import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function StoryPage() {
    const { slug } = useParams()
    const name = slug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Story'

    return (
        <div className="page-wrapper">
            <Helmet><title>{name} - MNC Stories</title></Helmet>
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
                                        <div className="section-tag-text">{name}</div>
                                    </div>
                                </div>
                                <h1 className="page-hero-title">{name}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="cta-block">
                                <div className="cta-text-block">
                                    <h2 className="cta-title">Want to Learn More?</h2>
                                    <div className="cta-except">Discover how MNC is driving change across industries.</div>
                                </div>
                                <div className="cta-button-block">
                                    <Button to="/about-us" variant="dark">About MNC</Button>
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
