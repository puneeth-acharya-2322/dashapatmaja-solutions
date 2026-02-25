import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TEAM = [
    {
        name: 'James Anderson', role: 'CEO & Founder',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940855e2f7069f060ea1d13_James%20Anderson.avif',
        linkedin: 'https://linkedin.com',
    },
    {
        name: 'Emma Rodriguez', role: 'Chief Operations Officer',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/694085cfe99c27cf0e0c4dad_Emma%20Rodriguez.avif',
        linkedin: 'https://linkedin.com',
    },
    {
        name: 'David Thompson', role: 'Chief Financial Officer',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940860b4e70b46d028b60be_David%20Thompson.avif',
        linkedin: 'https://linkedin.com',
    },
    {
        name: 'Sarah Mitchell', role: 'Chief Technology Officer',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940863f61c7f77b61c5af27_Sarah%20Mitchell.avif',
        linkedin: 'https://linkedin.com',
    },
]

const VALUES = [
    { icon: '🌍', title: 'Global Vision', desc: 'Operating across multiple countries and industries, building solutions that scale globally while maintaining local relevance and cultural sensitivity.' },
    { icon: '🔬', title: 'Innovation First', desc: 'Leading with cutting-edge technology and creative thinking to develop solutions that shape the future of industries and markets.' },
    { icon: '🤝', title: 'Partnership & Collaboration', desc: 'Building long-term relationships with clients, investors, and communities based on trust, transparency, and mutual growth.' },
    { icon: '⚡', title: 'Sustainability', desc: 'Committed to responsible growth that creates lasting positive impact for environments, communities, and future generations.' },
]

const FAQS = [
    { q: 'What industries does MNC operate in?', a: 'MNC operates across technology, renewable energy, finance & investment, healthcare, logistics, and real estate. Our diversified portfolio allows us to leverage synergies across sectors and provide comprehensive solutions.' },
    { q: 'How does MNC approach global expansion?', a: 'We combine deep local market expertise with global resources and best practices. Our approach involves strategic partnerships, local talent acquisition, and culturally adapted solutions.' },
    { q: 'What sets MNC apart from other multinational companies?', a: 'Our unique advantage lies in our integrated approach across multiple industries, our commitment to innovation, and our focus on sustainable, long-term value creation for all stakeholders.' },
    { q: 'How can businesses partner with MNC?', a: 'We welcome partnerships at various levels, from strategic alliances to service engagements. Reach out through our contact page to discuss how we can collaborate for mutual growth.' },
]

export default function AboutUs() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>About Us - MNC</title>
                <meta name="description" content="Learn about MNC, a global company operating across technology, finance, logistics, energy, and consumer products." />
            </Helmet>
            <div id="go-top"></div>
            <Header />
            <div className="main-wrapper">

                {/* Hero */}
                <section className="page-hero-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="page-hero-block">
                                <div data-scroll-anim className="page-hero-tag">
                                    <div className="section-tag-block">
                                        <div className="section-tag">
                                            <a href="/" className="section-tag-link">Home</a>
                                            <div className="section-tag-slash">/</div>
                                            <div className="section-tag-text">About Us</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-hero-title-block">
                                    <h1 data-scroll-anim className="page-hero-title">Empowering Global Progress Through Innovation</h1>
                                </div>
                                <div data-scroll-anim className="page-hero-except">
                                    MNC is a diversified multinational company building solutions across technology, energy, logistics, finance, and consumer products, creating lasting value for partners and communities worldwide.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Banner image */}
                <div className="w-layout-blockcontainer container-default w-container">
                    <img
                        data-scroll-scale
                        src="https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c5cf97d13e10e38d05c7_About%20Us%20Image.avif"
                        loading="eager"
                        alt="About Us"
                        className="about-image"
                        style={{ width: '100%', borderRadius: '12px', display: 'block', marginBottom: '60px' }}
                    />
                </div>

                {/* Values */}
                <section className="values-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="values-block">
                                <div className="section-tag-block">
                                    <div data-scroll-anim className="section-tag">Our Values</div>
                                </div>
                                <div className="section-title-block">
                                    <h2 data-scroll-anim className="section-title">The principles that drive everything we do</h2>
                                </div>
                                <div className="values-card-block" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px', marginTop: '48px' }}>
                                    {VALUES.map((v, i) => (
                                        <div key={i} data-scroll-anim className="values-card" style={{ padding: '32px', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
                                            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{v.icon}</div>
                                            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>{v.title}</h3>
                                            <p style={{ opacity: 0.65, lineHeight: 1.6 }}>{v.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="team-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="team-block">
                                <div className="section-tag-block">
                                    <div data-scroll-anim className="section-tag">Our Team</div>
                                </div>
                                <div className="section-title-block">
                                    <h2 data-scroll-anim className="section-title">Experienced leadership driving global growth</h2>
                                </div>
                                <div className="team-card-block" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '24px', marginTop: '48px' }}>
                                    {TEAM.map((t, i) => (
                                        <div key={i} data-scroll-scale className="team-card" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                                            <img src={t.img} loading="lazy" alt={t.name} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
                                            <div style={{ padding: '20px' }}>
                                                <div style={{ fontWeight: 700, marginBottom: '4px' }}>{t.name}</div>
                                                <div style={{ opacity: 0.6, fontSize: '14px' }}>{t.role}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="faq-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="section-tag-block">
                                <div data-scroll-anim className="section-tag">FAQ</div>
                            </div>
                            <h2 data-scroll-anim className="section-title">Common questions answered</h2>
                            <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {FAQS.map((f, i) => (
                                    <div key={i} data-scroll-anim style={{ padding: '24px 28px', border: '1px solid #e5e5e5', borderRadius: '10px' }}>
                                        <div style={{ fontWeight: 600, marginBottom: '10px' }}>{f.q}</div>
                                        <div style={{ opacity: 0.65, lineHeight: 1.7 }}>{f.a}</div>
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
                                    <h2 data-scroll-anim className="cta-title">Ready to Partner With Us?</h2>
                                    <div data-scroll-anim className="cta-except">Connect with our team to explore growth opportunities together.</div>
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
