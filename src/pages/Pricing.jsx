import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TIERS = [
    {
        name: 'Starter',
        price: '$499',
        period: '/month',
        desc: 'Perfect for small businesses beginning their global journey.',
        features: [
            'Access to 2 solution areas',
            'Basic analytics dashboard',
            'Email support',
            '5 user accounts',
            'Monthly reporting',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Professional',
        price: '$1,499',
        period: '/month',
        desc: 'Comprehensive solutions for growing mid-size enterprises.',
        features: [
            'Access to all 6 solution areas',
            'Advanced analytics & insights',
            'Priority 24/7 support',
            '25 user accounts',
            'Weekly reporting & strategy calls',
            'Dedicated account manager',
        ],
        cta: 'Start Free Trial',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: '$4,999',
        period: '/month',
        desc: 'Full-scale operations for large multinational companies.',
        features: [
            'Unlimited solution access',
            'Custom AI-powered analytics',
            'Dedicated global support team',
            'Unlimited user accounts',
            'Real-time reporting & board insights',
            'Dedicated C-suite advisor',
            'Custom integrations & API access',
        ],
        cta: 'Contact Sales',
        highlighted: false,
    },
]

export default function Pricing() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>Pricing - MNC</title>
                <meta name="description" content="Flexible pricing plans for businesses of all sizes. Choose the plan that fits your global ambitions." />
            </Helmet>
            <div id="go-top"></div>
            <Header />
            <div className="main-wrapper">

                {/* Hero */}
                <section className="page-hero-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="page-hero-block" style={{ textAlign: 'center' }}>
                                <div className="section-tag-block" style={{ justifyContent: 'center', display: 'flex' }}>
                                    <div className="section-tag">
                                        <a href="/" className="section-tag-link">Home</a>
                                        <div className="section-tag-slash">/</div>
                                        <div className="section-tag-text">Pricing</div>
                                    </div>
                                </div>
                                <h1 data-scroll-anim className="page-hero-title">Simple, Transparent Pricing</h1>
                                <div data-scroll-anim className="page-hero-except" style={{ maxWidth: '560px', margin: '0 auto' }}>
                                    Choose the plan that matches your business scale and global ambitions. All plans include our core platform with no hidden fees.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="pricing-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'start' }}>
                                {TIERS.map((t, i) => (
                                    <div
                                        key={t.name}
                                        data-scroll-anim
                                        style={{
                                            padding: '36px 32px',
                                            borderRadius: '16px',
                                            border: t.highlighted ? 'none' : '1px solid #e5e5e5',
                                            background: t.highlighted ? '#0a0a0a' : '#fff',
                                            color: t.highlighted ? '#fff' : 'inherit',
                                            position: 'relative',
                                        }}
                                    >
                                        {t.highlighted && (
                                            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>Most Popular</div>
                                        )}
                                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '8px' }}>{t.name}</div>
                                        <div style={{ fontSize: '13px', opacity: 0.6, marginBottom: '24px' }}>{t.desc}</div>
                                        <div style={{ marginBottom: '28px' }}>
                                            <span style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>{t.price}</span>
                                            <span style={{ opacity: 0.6, fontSize: '14px' }}>{t.period}</span>
                                        </div>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {t.features.map((f, j) => (
                                                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', opacity: 0.85 }}>
                                                    <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            to="/contact-us"
                                            variant={t.highlighted ? 'light' : 'dark'}
                                            style={{ width: '100%' }}
                                        >
                                            {t.cta}
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            {/* Enterprise custom note */}
                            <div data-scroll-anim style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: '#f5f5f5', borderRadius: '16px' }}>
                                <h3 style={{ marginTop: 0 }}>Need a Custom Solution?</h3>
                                <p style={{ opacity: 0.65, maxWidth: '480px', margin: '0 auto 24px' }}>
                                    For large enterprises with complex requirements, we offer fully custom pricing tailored to your specific needs and scale.
                                </p>
                                <Button to="/contact-us" variant="dark">Talk to Enterprise Sales</Button>
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
