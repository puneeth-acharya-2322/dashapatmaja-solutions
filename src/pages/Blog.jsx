import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const POSTS = [
    {
        slug: 'global-market-strategies',
        tag: 'Finance', date: 'October 22, 2024', readTime: '5 Min Read',
        title: 'Global Market Strategies for Sustainable Growth',
        excerpt: 'Discover how leading multinationals are adapting market strategies to drive sustainable growth in an evolving global landscape.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba6ebf8c4f9fa3dfc1_Blog%20Image%2001.avif',
    },
    {
        slug: 'renewable-energy-investment',
        tag: 'Energy', date: 'November 5, 2024', readTime: '7 Min Read',
        title: 'Renewable Energy Investment: Opportunities and Challenges',
        excerpt: 'Explore the growing landscape of renewable energy investment, from solar to wind, and the key factors shaping the sector.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba15399d0dde0c13c8_Blog%20Image%2002.avif',
    },
    {
        slug: 'logistics-digital-transformation',
        tag: 'Logistics', date: 'December 12, 2024', readTime: '6 Min Read',
        title: 'Digital Transformation in Global Logistics Networks',
        excerpt: 'How AI, blockchain, and IoT are revolutionizing logistics operations and creating more resilient global supply chains.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba35dae2a855c50a5b_Blog%20Image%2003.avif',
    },
    {
        slug: 'healthcare-tech-innovation',
        tag: 'Healthcare', date: 'January 8, 2025', readTime: '8 Min Read',
        title: 'The Future of Healthcare: Technology-Driven Patient Care',
        excerpt: 'From AI diagnostics to telemedicine, how technology is fundamentally transforming the patient experience and healthcare outcomes.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a49fcc31d44f5d1943b12_Healthcare%20Innovations%20Thumbnail.avif',
    },
    {
        slug: 'real-estate-global-trends',
        tag: 'Real Estate', date: 'January 25, 2025', readTime: '5 Min Read',
        title: 'Global Real Estate Trends Shaping 2025 and Beyond',
        excerpt: 'Key real estate markets to watch in 2025 and the economic factors influencing property investment decisions worldwide.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a47950a4541a72fbf019f_Real%20Estate%20Solutions%20Thumbnail.avif',
    },
    {
        slug: 'digital-transformation-enterprise',
        tag: 'Technology', date: 'February 14, 2025', readTime: '6 Min Read',
        title: 'Enterprise Digital Transformation: Lessons from the Front Lines',
        excerpt: 'Practical insights from companies that have successfully navigated large-scale digital transformation initiatives.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a6d462a1b4499ca605a_Digital%20Solutions%20Thumbnail.avif',
    },
]

export default function Blog() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>Blog - MNC</title>
                <meta name="description" content="Latest insights, trends, and thought leadership from MNC across technology, energy, finance, logistics, and real estate." />
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
                                        <div className="section-tag-text">Blog</div>
                                    </div>
                                </div>
                                <h1 data-scroll-anim className="page-hero-title">Insights & Perspectives from MNC</h1>
                                <div data-scroll-anim className="page-hero-except">
                                    Expert analysis, industry trends, and strategic perspectives from our leadership team and industry partners.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="blog-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="insights-card-block w-dyn-list">
                                <div role="list" className="insights-list w-dyn-items">
                                    {POSTS.map((post) => (
                                        <div key={post.slug} role="listitem" className="insights-item w-dyn-item">
                                            <Link to={`/blog/${post.slug}`} className="insights-card w-inline-block">
                                                <div className="insights-image-block">
                                                    <img src={post.img} loading="lazy" alt={post.title} className="insights-image" />
                                                    <div className="insights-tag-block">
                                                        <div className="insights-tag">{post.tag}</div>
                                                    </div>
                                                </div>
                                                <div className="insights-details">
                                                    <div className="insights-read">{post.readTime}</div>
                                                    <h3 className="insights-name">{post.title}</h3>
                                                    <div className="insights-except">{post.excerpt}</div>
                                                    <div className="insights-date">{post.date}</div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
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
                                    <h2 data-scroll-anim className="cta-title">Stay Ahead of the Curve</h2>
                                    <div data-scroll-anim className="cta-except">Subscribe to our newsletter for the latest insights directly in your inbox.</div>
                                </div>
                                <div data-scroll-anim className="cta-button-block">
                                    <Button to="/contact-us" variant="dark">Subscribe Now</Button>
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
