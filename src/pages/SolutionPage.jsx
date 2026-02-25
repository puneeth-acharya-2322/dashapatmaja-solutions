import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SOLUTION_DATA = {
    'digital-solutions': {
        name: 'Digital Solutions',
        tagline: 'Technology-Driven Business Transformation',
        desc: 'MNC\'s Digital Solutions arm delivers cutting-edge technology implementations that transform how businesses operate, compete, and grow in the digital age. From cloud migration to AI integration, we craft tailored digital strategies that generate measurable results.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a6d462a1b4499ca605a_Digital%20Solutions%20Thumbnail.avif',
        features: ['Cloud Infrastructure', 'AI & Machine Learning', 'Data Analytics', 'Cybersecurity', 'Digital Transformation', 'Enterprise Software'],
        results: [
            { stat: '45%', label: 'Average efficiency increase' },
            { stat: '3x', label: 'Faster time-to-market' },
            { stat: '$2.5M', label: 'Average annual savings' },
        ],
    },
    'renewable-energy': {
        name: 'Renewable Energy',
        tagline: 'Clean Energy for a Sustainable Future',
        desc: 'Our Renewable Energy division develops, finances, and operates large-scale clean energy projects globally. From solar farms to wind installations, we\'re building the energy infrastructure needed for a carbon-neutral world.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a3c69f0e9cbb2993586_Renewable%20Energy%20Thumbnail.avif',
        features: ['Solar Power', 'Wind Energy', 'Energy Storage', 'Grid Integration', 'Carbon Credits', 'Project Financing'],
        results: [
            { stat: '2GW+', label: 'Clean energy capacity' },
            { stat: '40%', label: 'Cost reduction vs fossil fuels' },
            { stat: '1M+', label: 'Homes powered' },
        ],
    },
    'finance-investment': {
        name: 'Finance & Investment',
        tagline: 'Strategic Capital for Global Growth',
        desc: 'MNC\'s Finance & Investment division provides sophisticated capital solutions, from private equity to structured finance, helping businesses scale and investors achieve superior risk-adjusted returns.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a1bdf6c44d1b316a309_Finance%20%26%20Investment%20Thumbnail.avif',
        features: ['Private Equity', 'Venture Capital', 'Structured Finance', 'M&A Advisory', 'IPO Support', 'Fund Management'],
        results: [
            { stat: '18.5%', label: 'Average annual returns' },
            { stat: '$5B+', label: 'Assets under management' },
            { stat: '200+', label: 'Portfolio companies' },
        ],
    },
    'healthcare-innovations': {
        name: 'Healthcare Innovations',
        tagline: 'Advanced Technology Improving Patient Outcomes',
        desc: 'Our Healthcare Innovations division applies cutting-edge technology to the most pressing challenges in global healthcare, from AI-powered diagnostics to telemedicine platforms and medical device innovation.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a49fcc31d44f5d1943b12_Healthcare%20Innovations%20Thumbnail.avif',
        features: ['AI Diagnostics', 'Telemedicine', 'Medical Devices', 'Health Data Analytics', 'Drug Discovery', 'Hospital Management'],
        results: [
            { stat: '30%', label: 'Improvement in diagnostic accuracy' },
            { stat: '50M+', label: 'Patients served annually' },
            { stat: '25%', label: 'Reduction in treatment costs' },
        ],
    },
    'logistic-solutions': {
        name: 'Logistic Solutions',
        tagline: 'Intelligent Supply Chains Across Global Markets',
        desc: 'MNC\'s Logistic Solutions division builds and operates world-class supply chain networks, integrating advanced technology with deep operational expertise to deliver faster, more reliable, and more cost-effective logistics.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a49d9c7e9c183b79906a1_Logistic%20Solutions%20Thumbnail.avif',
        features: ['Supply Chain Management', 'Last-Mile Delivery', 'Warehouse Automation', 'Fleet Management', 'Cold Chain Logistics', 'Cross-Border Trade'],
        results: [
            { stat: '35%', label: 'Reduction in delivery times' },
            { stat: '99.8%', label: 'On-time delivery rate' },
            { stat: '1B+', label: 'Packages delivered annually' },
        ],
    },
    'real-estate-solutions': {
        name: 'Real Estate Solutions',
        tagline: 'Strategic Property Investment and Development',
        desc: 'Our Real Estate Solutions division manages a diverse global portfolio spanning commercial, residential, and industrial properties, leveraging market intelligence and active management to maximize long-term value.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a47950a4541a72fbf019f_Real%20Estate%20Solutions%20Thumbnail.avif',
        features: ['Commercial Properties', 'Residential Development', 'Industrial Parks', 'PropTech Integration', 'Portfolio Management', 'Real Estate Finance'],
        results: [
            { stat: '$8B+', label: 'Portfolio value' },
            { stat: '350+', label: 'Properties globally' },
            { stat: '9.8%', label: 'Average annual returns' },
        ],
    },
}

export default function SolutionPage() {
    const { slug } = useParams()
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    const data = SOLUTION_DATA[slug] || {
        name: slug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Solution',
        tagline: '', desc: 'Solution details coming soon.', img: '',
        features: [], results: [],
    }

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>{data.name} - MNC Solutions</title>
                <meta name="description" content={data.desc} />
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
                                        <a href="/solutions" className="section-tag-link">Solutions</a>
                                        <div className="section-tag-slash">/</div>
                                        <div className="section-tag-text">{data.name}</div>
                                    </div>
                                </div>
                                <div data-scroll-anim className="page-hero-tag-line" style={{ opacity: 0.6, marginBottom: '12px', fontSize: '0.95rem' }}>{data.tagline}</div>
                                <h1 data-scroll-anim className="page-hero-title">{data.name}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                <section>
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start', marginBottom: '80px' }}>
                                <div>
                                    {data.img && (
                                        <img src={data.img} alt={data.name} loading="eager" data-scroll-scale style={{ width: '100%', borderRadius: '12px', marginBottom: '32px' }} />
                                    )}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                                        {data.results.map((r, i) => (
                                            <div key={i} data-scroll-anim style={{ padding: '20px', background: '#f5f5f5', borderRadius: '10px', textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '6px' }}>{r.stat}</div>
                                                <div style={{ opacity: 0.65, fontSize: '13px', lineHeight: 1.4 }}>{r.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p data-scroll-anim style={{ lineHeight: 1.8, opacity: 0.75, fontSize: '1.05rem', marginTop: 0, marginBottom: '32px' }}>{data.desc}</p>
                                    <div className="section-tag-block" style={{ marginBottom: '16px' }}>
                                        <div className="section-tag">Key Capabilities</div>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
                                        {data.features.map((f, i) => (
                                            <span key={i} style={{ padding: '8px 16px', border: '1px solid #e5e5e5', borderRadius: '40px', fontSize: '14px' }}>{f}</span>
                                        ))}
                                    </div>
                                    <Button to="/contact-us" variant="dark">Discuss This Solution</Button>
                                </div>
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
                                    <h2 data-scroll-anim className="cta-title">Ready to Get Started?</h2>
                                    <div data-scroll-anim className="cta-except">Our {data.name} experts are ready to build the right solution for your needs.</div>
                                </div>
                                <div data-scroll-anim className="cta-button-block">
                                    <Button to="/contact-us" variant="dark">Let's Talk</Button>
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
