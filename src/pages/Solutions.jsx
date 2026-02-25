import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SOLUTIONS = [
    {
        slug: 'digital-solutions', name: 'Digital Solutions', num: '01',
        desc: 'Innovative technology solutions that streamline operations, enhance efficiency, and drive business growth.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a6d462a1b4499ca605a_Digital%20Solutions%20Thumbnail.avif',
    },
    {
        slug: 'renewable-energy', name: 'Renewable Energy', num: '02',
        desc: 'Scalable renewable energy solutions reducing costs while building a sustainable future for businesses and communities.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a3c69f0e9cbb2993586_Renewable%20Energy%20Thumbnail.avif',
    },
    {
        slug: 'finance-investment', name: 'Finance & Investment', num: '03',
        desc: 'Dynamic finance and investment services maximizing returns through strategic planning and data-driven decisions.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a1bdf6c44d1b316a309_Finance%20%26%20Investment%20Thumbnail.avif',
    },
    {
        slug: 'healthcare-innovations', name: 'Healthcare Innovations', num: '04',
        desc: 'Advanced healthcare technology improving patient care and driving progress in medical treatments.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a49fcc31d44f5d1943b12_Healthcare%20Innovations%20Thumbnail.avif',
    },
    {
        slug: 'logistic-solutions', name: 'Logistic Solutions', num: '05',
        desc: 'Adaptive logistic solutions optimizing global supply chains for efficiency and reliable worldwide delivery.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a49d9c7e9c183b79906a1_Logistic%20Solutions%20Thumbnail.avif',
    },
    {
        slug: 'real-estate-solutions', name: 'Real Estate Solutions', num: '06',
        desc: 'Scalable real estate solutions maximizing property value through market insight and confident portfolio growth.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a47950a4541a72fbf019f_Real%20Estate%20Solutions%20Thumbnail.avif',
    },
]

export default function Solutions() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>Solutions - MNC</title>
                <meta name="description" content="Explore MNC's comprehensive solutions across digital technology, renewable energy, finance, healthcare, logistics, and real estate." />
            </Helmet>
            <div id="go-top"></div>
            <Header />
            <div className="main-wrapper">

                {/* Hero */}
                <section className="page-hero-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="page-hero-block">
                                <div className="section-tag-block">
                                    <div className="section-tag">
                                        <a href="/" className="section-tag-link">Home</a>
                                        <div className="section-tag-slash">/</div>
                                        <div className="section-tag-text">Solutions</div>
                                    </div>
                                </div>
                                <h1 data-scroll-anim className="page-hero-title">Comprehensive Solutions for Global Business Challenges</h1>
                                <div data-scroll-anim className="page-hero-except">
                                    From digital innovation to sustainable energy, our integrated solutions address the most complex business challenges across industries and markets.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions List */}
                <section className="solutions-list-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                                {SOLUTIONS.map((s, i) => (
                                    <div key={s.slug} data-scroll-anim style={{
                                        display: 'grid',
                                        gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                                        gap: '40px',
                                        alignItems: 'center',
                                        padding: '40px',
                                        border: '1px solid #e5e5e5',
                                        borderRadius: '12px',
                                    }}>
                                        <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                                            <div style={{ opacity: 0.4, marginBottom: '12px', fontSize: '14px' }}>{s.num}</div>
                                            <h2 style={{ marginTop: 0, marginBottom: '16px' }}>{s.name}</h2>
                                            <p style={{ opacity: 0.65, lineHeight: 1.7 }}>{s.desc}</p>
                                            <Button to={`/solution/${s.slug}`}>Learn More</Button>
                                        </div>
                                        <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                                            <img src={s.img} alt={s.name} loading="lazy" style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', aspectRatio: '16/9' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="cta-block">
                                <div className="cta-text-block">
                                    <h2 data-scroll-anim className="cta-title">Find the Right Solution</h2>
                                    <div data-scroll-anim className="cta-except">Our experts are ready to tailor solutions to your unique business needs.</div>
                                </div>
                                <div data-scroll-anim className="cta-button-block">
                                    <Button to="/contact-us" variant="dark">Talk to an Expert</Button>
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
