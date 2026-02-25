import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STATS = [
    { num: '40%', label: 'Reduction in carbon emissions from our energy portfolio' },
    { num: '$2B+', label: 'Invested in renewable energy projects globally' },
    { num: '50+', label: 'Active sustainability initiatives across all business units' },
    { num: '100%', label: 'Commitment to net-zero operations by 2040' },
]

const STORIES = [
    {
        title: 'Solar Farm Project in Southeast Asia',
        desc: 'Our 500MW solar installation powers 300,000 homes, reducing regional carbon emissions by 15% annually.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba35dae2a855c50a5b_Blog%20Image%2003.avif',
    },
    {
        title: 'Green Logistics Transformation',
        desc: 'Converted 60% of our logistics fleet to electric vehicles, cutting operational emissions by 35% in 18 months.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba15399d0dde0c13c8_Blog%20Image%2002.avif',
    },
    {
        title: 'Sustainable Finance Framework',
        desc: 'Launched a $500M green bond to fund renewable energy and sustainable infrastructure projects globally.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba6ebf8c4f9fa3dfc1_Blog%20Image%2001.avif',
    },
]

export default function Sustainability() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>Sustainability - MNC</title>
                <meta name="description" content="MNC's commitment to sustainable business practices, renewable energy investment, and environmental responsibility." />
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
                                        <div className="section-tag-text">Sustainability</div>
                                    </div>
                                </div>
                                <h1 data-scroll-anim className="page-hero-title">Building a Sustainable Future for All</h1>
                                <div data-scroll-anim className="page-hero-except">
                                    Our commitment to sustainability goes beyond compliance — it's core to our strategy, operations, and long-term vision for a healthy planet.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="sustainability-stats-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                                {STATS.map((s, i) => (
                                    <div key={i} data-scroll-anim style={{ padding: '32px', background: '#f5f5f5', borderRadius: '12px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '12px' }}>{s.num}</div>
                                        <div style={{ opacity: 0.65, lineHeight: 1.5 }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="stories-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="section-tag-block">
                                <div data-scroll-anim className="section-tag">Success Stories</div>
                            </div>
                            <h2 data-scroll-anim className="section-title">Measurable environmental impact at scale</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
                                {STORIES.map((s, i) => (
                                    <div key={i} data-scroll-scale style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                                        <img src={s.img} alt={s.title} loading="lazy" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} />
                                        <div style={{ padding: '24px' }}>
                                            <h3 style={{ marginTop: 0, marginBottom: '12px' }}>{s.title}</h3>
                                            <p style={{ opacity: 0.65, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
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
                                    <h2 data-scroll-anim className="cta-title">Join Our Sustainability Journey</h2>
                                    <div data-scroll-anim className="cta-except">Partner with us to create a more sustainable and prosperous future.</div>
                                </div>
                                <div data-scroll-anim className="cta-button-block">
                                    <Button to="/contact-us" variant="dark">Get In Touch</Button>
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
