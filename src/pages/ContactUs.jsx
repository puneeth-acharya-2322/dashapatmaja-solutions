import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const OFFICES = [
    { city: 'New York', address: '350 Fifth Avenue, 59th Floor\nNew York, NY 10118, USA', phone: '+1 (212) 555-0100' },
    { city: 'London', address: '1 Canada Square, Canary Wharf\nLondon E14 5AB, United Kingdom', phone: '+44 (0)20 555-0200' },
    { city: 'Singapore', address: '9 Raffles Place, Republic Plaza\nSingapore 048619', phone: '+65 6555 0300' },
]

export default function ContactUs() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>Contact Us - MNC</title>
                <meta name="description" content="Get in touch with MNC. Our team is ready to help you explore opportunities and find solutions for your business." />
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
                                        <div className="section-tag-text">Contact Us</div>
                                    </div>
                                </div>
                                <h1 data-scroll-anim className="page-hero-title">Let's Build Something Great Together</h1>
                                <div data-scroll-anim className="page-hero-except">
                                    Whether you're looking to explore a partnership, learn about our services, or simply talk to our team — we're here to help.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form + Info */}
                <section className="contact-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

                                {/* Form */}
                                <div data-scroll-anim className="contact-form-block">
                                    <h2 style={{ marginTop: 0, marginBottom: '32px' }}>Send Us a Message</h2>
                                    <form className="w-form" onSubmit={e => e.preventDefault()}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                            <div>
                                                <label className="w-form-label">First Name</label>
                                                <input type="text" className="w-input" placeholder="James" required />
                                            </div>
                                            <div>
                                                <label className="w-form-label">Last Name</label>
                                                <input type="text" className="w-input" placeholder="Anderson" required />
                                            </div>
                                        </div>
                                        <div style={{ marginBottom: '16px' }}>
                                            <label className="w-form-label">Email Address</label>
                                            <input type="email" className="w-input" placeholder="james@company.com" required />
                                        </div>
                                        <div style={{ marginBottom: '16px' }}>
                                            <label className="w-form-label">Company</label>
                                            <input type="text" className="w-input" placeholder="Your Company Name" />
                                        </div>
                                        <div style={{ marginBottom: '16px' }}>
                                            <label className="w-form-label">Subject</label>
                                            <select className="w-select">
                                                <option value="">Select a topic...</option>
                                                <option>Business Partnership</option>
                                                <option>Investment Inquiry</option>
                                                <option>Service Information</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>
                                        <div style={{ marginBottom: '24px' }}>
                                            <label className="w-form-label">Message</label>
                                            <textarea className="w-input" placeholder="Tell us about your needs..." rows={5} style={{ height: 'auto', resize: 'vertical' }} required />
                                        </div>
                                        <Button to="#" variant="dark">Send Message</Button>
                                    </form>
                                </div>

                                {/* Office Info */}
                                <div>
                                    <h2 data-scroll-anim style={{ marginTop: 0, marginBottom: '32px' }}>Our Offices</h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                                        {OFFICES.map((o, i) => (
                                            <div key={i} data-scroll-anim style={{ padding: '24px', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
                                                <div style={{ fontWeight: 700, marginBottom: '10px' }}>{o.city}</div>
                                                <div style={{ opacity: 0.65, fontSize: '14px', lineHeight: 1.7, marginBottom: '8px', whiteSpace: 'pre-line' }}>{o.address}</div>
                                                <a href={`tel:${o.phone}`} style={{ color: 'inherit', fontSize: '14px' }}>{o.phone}</a>
                                            </div>
                                        ))}
                                    </div>
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
