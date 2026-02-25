import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const POSTS = {
    'global-market-strategies': {
        tag: 'Finance', date: 'October 22, 2024', readTime: '5 Min Read',
        title: 'Global Market Strategies for Sustainable Growth',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba6ebf8c4f9fa3dfc1_Blog%20Image%2001.avif',
        body: `Multinational companies operating in today's volatile global markets must adopt adaptive strategies that balance short-term performance with long-term sustainability goals.\n\nLeading organizations are increasingly integrating ESG considerations into their core business strategy, not just as a compliance exercise but as a source of competitive advantage. Companies that align their operations with sustainable development goals tend to attract better talent, unlock new capital sources, and build stronger stakeholder relationships.\n\nKey strategic priorities for 2025 include market diversification across emerging economies, digital-first go-to-market models, and resilient supply chain design that can withstand geopolitical disruptions.`,
    },
    'renewable-energy-investment': {
        tag: 'Energy', date: 'November 5, 2024', readTime: '7 Min Read',
        title: 'Renewable Energy Investment: Opportunities and Challenges',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba15399d0dde0c13c8_Blog%20Image%2002.avif',
        body: `The renewable energy sector continues to attract record levels of investment globally, driven by falling technology costs, supportive policy environments, and growing corporate demand for clean energy.\n\nSolar PV has become the cheapest source of electricity in history, while offshore wind is rapidly scaling to provide reliable baseload power. Battery storage technology is solving the intermittency challenge, opening new markets for renewable deployment.\n\nInvestors face challenges including regulatory uncertainty, grid integration complexity, and the need for long-term capital commitments. However, those who can navigate these complexities are positioned to benefit from one of the most significant economic transitions in history.`,
    },
}

export default function BlogPost() {
    const { slug } = useParams()
    const post = POSTS[slug] || {
        tag: 'Insights', date: 'January 2025', readTime: '5 Min Read',
        title: slug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Blog Post',
        img: '', body: 'Full article content coming soon.',
    }

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{post.title} - MNC Blog</title>
                <meta name="description" content={post.body.slice(0, 160)} />
            </Helmet>
            <div id="go-top"></div>
            <Header />
            <div className="main-wrapper">
                <section className="page-hero-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container" style={{ maxWidth: '800px' }}>
                            <div className="section-tag-block">
                                <div className="section-tag">{post.tag}</div>
                            </div>
                            <h1 className="page-hero-title" style={{ marginBottom: '20px' }}>{post.title}</h1>
                            <div style={{ display: 'flex', gap: '16px', opacity: 0.6, fontSize: '14px', marginBottom: '40px' }}>
                                <span>{post.readTime}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                            {post.img && (
                                <img src={post.img} alt={post.title} loading="eager"
                                    style={{ width: '100%', borderRadius: '12px', marginBottom: '48px', aspectRatio: '16/7', objectFit: 'cover' }} />
                            )}
                            <div style={{ lineHeight: 1.9, fontSize: '1.05rem', opacity: 0.8 }}>
                                {post.body.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                            <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid #eee', display: 'flex', gap: '16px' }}>
                                <Button to="/blog" variant="dark">← Back to Blog</Button>
                                <Button to="/contact-us">Talk to an Expert</Button>
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
