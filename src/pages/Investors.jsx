import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const INVESTORS = [
    {
        slug: 'global-equity-fund',
        name: 'Global Equity Fund',
        type: 'Equity Investment',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940dcf8b52bddb7fb12ac27_Investors%20Image%2001.avif',
        aum: '$2.5B',
        returns: '18.5%',
    },
    {
        slug: 'sustainable-growth-partners',
        name: 'Sustainable Growth Partners',
        type: 'Impact Investment',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940dcf8027f37bae2bf91f1_Investors%20Image%2002.avif',
        aum: '$1.8B',
        returns: '15.2%',
    },
    {
        slug: 'tech-ventures-capital',
        name: 'Tech Ventures Capital',
        type: 'Venture Capital',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940dcf813fb50c3c45e8f32_Investors%20Image%2003.avif',
        aum: '$3.1B',
        returns: '22.8%',
    },
    {
        slug: 'energy-transition-fund',
        name: 'Energy Transition Fund',
        type: 'Infrastructure Fund',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940dcf877e9a10cef8ceee3_Investors%20Image%2004.avif',
        aum: '$4.2B',
        returns: '12.3%',
    },
    {
        slug: 'real-estate-development-fund',
        name: 'Real Estate Development Fund',
        type: 'Real Estate Investment',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940dcf8d6e78c3d9e8e7cee_Investors%20Image%2005.avif',
        aum: '$5.6B',
        returns: '9.8%',
    },
    {
        slug: 'healthcare-innovation-fund',
        name: 'Healthcare Innovation Fund',
        type: 'Sector-Specific Fund',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940dcf8f0f9e2ee9e1c3c96_Investors%20Image%2006.avif',
        aum: '$1.2B',
        returns: '16.4%',
    },
]

export default function Investors() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>Investors - MNC</title>
                <meta name="description" content="Investment opportunities with MNC across equity, impact, venture, infrastructure, and real estate." />
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
                                        <div className="section-tag-text">Investors</div>
                                    </div>
                                </div>
                                <h1 data-scroll-anim className="page-hero-title">Investment Opportunities Across Global Markets</h1>
                                <div data-scroll-anim className="page-hero-except">
                                    Partner with MNC's diverse portfolio of investment vehicles to achieve superior risk-adjusted returns across multiple asset classes and geographies.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Investor Cards */}
                <section className="investors-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
                                {INVESTORS.map((inv, i) => (
                                    <Link key={inv.slug} to={`/investor/${inv.slug}`} data-scroll-anim style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div style={{ border: '1px solid #e5e5e5', borderRadius: '12px', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
                                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
                                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                                        >
                                            <img src={inv.img} alt={inv.name} loading="lazy" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
                                            <div style={{ padding: '24px' }}>
                                                <div style={{ fontSize: '12px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{inv.type}</div>
                                                <h3 style={{ marginTop: 0, marginBottom: '16px' }}>{inv.name}</h3>
                                                <div style={{ display: 'flex', gap: '32px' }}>
                                                    <div>
                                                        <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>{inv.aum}</div>
                                                        <div style={{ fontSize: '13px', opacity: 0.6 }}>Assets Under Management</div>
                                                    </div>
                                                    <div>
                                                        <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#22c55e' }}>{inv.returns}</div>
                                                        <div style={{ fontSize: '13px', opacity: 0.6 }}>Avg. Annual Returns</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
                                    <h2 data-scroll-anim className="cta-title">Invest in Global Growth</h2>
                                    <div data-scroll-anim className="cta-except">Speak with our investment team to find the right opportunities for your portfolio.</div>
                                </div>
                                <div data-scroll-anim className="cta-button-block">
                                    <Button to="/contact-us" variant="dark">Talk to Our Team</Button>
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
