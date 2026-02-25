import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ARROW_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 25 25" fill="none" className="button-icon">
        <path d="M12.7793 18.4021C12.7793 18.4021 18.9133 13.8844 18.9133 12.268C18.9133 10.6516 12.7793 6.13403 12.7793 6.13403" stroke="currentColor" strokeWidth="1.67292" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.62285 18.4021C5.62285 18.4021 11.7568 13.8844 11.7568 12.268C11.7568 10.6516 5.6228 6.13403 5.6228 6.13403" stroke="currentColor" strokeWidth="1.67292" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const PARTNER_LOGOS = [
    'https://cdn.prod.website-files.com/69368a5646568096095bb918/693fdff31c26c9604c392dc8_59807c49ecf21e1bd5cc3e4f44eb0497_Partner%20Logo%2001.svg',
    'https://cdn.prod.website-files.com/69368a5646568096095bb918/693fdff3d6efdaae8659ff04_e50172ed0f39e8843775e43c37a29825_Partner%20Logo%2002.svg',
    'https://cdn.prod.website-files.com/69368a5646568096095bb918/693fdff3ae1dc26106c0df06_226c132c9b3f93589ecbba965b3bf3da_Partner%20Logo%2003.svg',
    'https://cdn.prod.website-files.com/69368a5646568096095bb918/693fdff3903ef89f8e5a1a5f_287e8fda20759774535d0564bcfdaff2_Partner%20Logo%2004.svg',
    'https://cdn.prod.website-files.com/69368a5646568096095bb918/693fdff34abc18af43f88c99_04b453304ed794425758d2b2408c58a3_Partner%20Logo%2005.svg',
    'https://cdn.prod.website-files.com/69368a5646568096095bb918/693fdff3307b501c60697da3_b4989a0c52e46a2f15e201d1f751e5bd_Partner%20Logo%2006.svg',
]

const SOLUTIONS = [
    {
        num: '01', slug: 'digital-solutions', name: 'Digital Solutions', white: false,
        desc: 'Innovative technology solutions that streamline operations, enhance efficiency, and drive business growth.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a6d462a1b4499ca605a_Digital%20Solutions%20Thumbnail.avif',
        points: [
            { title: 'Strategic Planning', info: 'Custom roadmaps for growth' },
            { title: 'Fast Implementation', info: 'Results in weeks, not months' },
            { title: 'ROI Focused', info: 'Measurable business impact' },
        ],
    },
    {
        num: '02', slug: 'renewable-energy', name: 'Renewable Energy', white: true,
        desc: 'Scalable template unifying multinational renewable energy operations with adaptable, multilingual, niche-specific modules.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a3c69f0e9cbb2993586_Renewable%20Energy%20Thumbnail.avif',
        points: [
            { title: 'Clean Power', info: 'Sustainable energy reducing costs.' },
            { title: 'Green Shift', info: 'Businesses adopt efficient renewables.' },
            { title: 'Eco Future', info: 'Cleaner power supporting growth.' },
        ],
    },
    {
        num: '03', slug: 'finance-investment', name: 'Finance & Investment', white: false,
        desc: 'Dynamic template unifying global finance and investment services with adaptable multilingual modules.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a4a1bdf6c44d1b316a309_Finance%20%26%20Investment%20Thumbnail.avif',
        points: [
            { title: 'Smart Finance', info: 'Strategic planning maximizing returns.' },
            { title: 'Wealth Growth', info: 'Investments performing with stability.' },
            { title: 'Capital Insight', info: 'Data-driven decisions increasing profitability.' },
        ],
    },
    {
        num: '04', slug: 'healthcare-innovations', name: 'Healthcare Innovations', white: true,
        desc: 'Advanced template unifying global healthcare innovations with adaptable, secure, multilingual, patient modules.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a49fcc31d44f5d1943b12_Healthcare%20Innovations%20Thumbnail.avif',
        points: [
            { title: 'Smart Health', info: 'Technology improving patient care.' },
            { title: 'Care Innovation', info: 'Healthcare solutions driving progress.' },
            { title: 'Medical Future', info: 'Better treatment, faster recovery.' },
        ],
    },
    {
        num: '05', slug: 'logistic-solutions', name: 'Logistic Solutions', white: false,
        desc: 'Adaptive template unifying global logistic solutions with scalable, multilingual, efficient, supply-chain modules.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a49d9c7e9c183b79906a1_Logistic%20Solutions%20Thumbnail.avif',
        points: [
            { title: 'Fast Delivery', info: 'Shipments delivered on time.' },
            { title: 'Smart Logistics', info: 'Operations optimized for efficiency.' },
            { title: 'Global Reach', info: 'Reliable worldwide transportation solutions.' },
        ],
    },
    {
        num: '06', slug: 'real-estate-solutions', name: 'Real Estate Solutions', white: true,
        desc: 'Adaptive template unifying global real estate solutions with scalable, multilingual, client-focused modules.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/693a47950a4541a72fbf019f_Real%20Estate%20Solutions%20Thumbnail.avif',
        points: [
            { title: 'Smart Property', info: 'Maximizing real estate value.' },
            { title: 'Market Insight', info: 'Informed investment decisions delivered.' },
            { title: 'Growth Potential', info: 'Expanding portfolios with confidence.' },
        ],
    },
]

const REVIEWS = [
    {
        id: 1, rating: '(4.9)', logo: 'Tab 1',
        quote: "I've worked with MNC. for over 5 years now. I'm continually impressed with how seamless our development is and highly recommend connecting with him if you're looking for a new development team",
        author: 'Sophie Gray', role: 'CEO, Logoipsum',
        img: 'https://cdn.prod.website-files.com/69368a5646568096095bb918/693ba2c2a41df584fdc170ca_Sophie%20Gray.avif',
        funding: '$1.2M+', years: '5+', service: 'Tech Solution',
    },
    {
        id: 2, rating: '(4.9)', logo: 'Tab 2',
        quote: "I've worked with MNC for over five years, and the experience has been outstanding. The development process is always smooth and reliable. I highly recommend connecting with him if you're looking for a trusted team.",
        author: 'Jason Miller', role: 'COO, Logoipsum',
        img: 'https://cdn.prod.website-files.com/69368a5646568096095bb918/693beb5faa17242002d60d64_Jason%20Miller.avif',
        funding: '$1.2M+', years: '5+', service: 'Renewable Energy',
    },
    {
        id: 3, rating: '(4.9)', logo: 'Tab 3',
        quote: "Partnering with MNC has been one of the best decisions for our company. Their workflow is seamless, communication is clear, and delivery is always on point. Anyone needing a strong development partner should reach out.",
        author: 'Emily Carter', role: 'Operations Director, Logoipsum',
        img: 'https://cdn.prod.website-files.com/69368a5646568096095bb918/693bebcba07ca7364b2645f8_Emily%20Carter.avif',
        funding: '$1.2M+', years: '5+', service: 'Finance & Investment',
    },
    {
        id: 4, rating: '(4.9)', logo: 'Tab 4',
        quote: "We've collaborated with MNC across multiple projects, and every time they've delivered beyond expectations. Truly professional, efficient, and detail-oriented. I'd absolutely recommend him for any development needs.",
        author: 'Michael Anderson', role: 'Senior UX Strategist, Logoipsum',
        img: 'https://cdn.prod.website-files.com/69368a5646568096095bb918/693bebffc84f308b2c8b6cb6_Michael%20Anderson.avif',
        funding: '$1.2M+', years: '5+', service: 'Healthcare',
    },
    {
        id: 5, rating: '(4.9)', logo: 'Tab 5',
        quote: "MNC has consistently made our development smooth and stress-free. Their ability to understand requirements and execute perfectly is remarkable. If you need a dependable dev team, he's the one to talk to.",
        author: 'Olivia Thompson', role: 'Marketing Lead, Logoipsum',
        img: 'https://cdn.prod.website-files.com/69368a5646568096095bb918/693bec792ec7cee2e00ae526_Olivia%20Thompson.avif',
        funding: '$1.2M+', years: '5+', service: 'Logistic Solution',
    },
]

const BLOG_POSTS = [
    {
        slug: 'global-market-strategies',
        tag: 'Finance', date: 'October 22, 2024',
        title: 'Global Market Strategies for Sustainable Growth',
        excerpt: 'Discover how leading multinationals are adapting their market strategies to drive sustainable growth in an evolving global landscape.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba6ebf8c4f9fa3dfc1_Blog%20Image%2001.avif',
        readTime: '5 Min Read',
    },
    {
        slug: 'renewable-energy-investment',
        tag: 'Energy', date: 'November 5, 2024',
        title: 'Renewable Energy Investment: Opportunities and Challenges',
        excerpt: 'Explore the growing landscape of renewable energy investment, from solar to wind power, and the key factors shaping the sector.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba15399d0dde0c13c8_Blog%20Image%2002.avif',
        readTime: '7 Min Read',
    },
    {
        slug: 'logistics-digital-transformation',
        tag: 'Logistics', date: 'December 12, 2024',
        title: 'Digital Transformation in Global Logistics Networks',
        excerpt: 'How AI, blockchain, and IoT are revolutionizing logistics operations and creating more resilient global supply chains.',
        img: 'https://cdn.prod.website-files.com/69395d5f6a8103b57d16196a/6940c9ba35dae2a855c50a5b_Blog%20Image%2003.avif',
        readTime: '6 Min Read',
    },
]

const CHECKBOX_ICON = 'https://cdn.prod.website-files.com/69368a5646568096095bb918/694a82d4720fc5483140a9c2_Checkbox.avif'
const RATING_ICON = 'https://cdn.prod.website-files.com/69368a5646568096095bb918/693b9c472ae8a050a77e315a_4.2.svg'

export default function Home() {
    const pageRef = useRef(null)
    useScrollAnimation(pageRef)

    // Tab testimonials state
    const [activeTab, setActiveTab] = useState(0)
    const [sliderIdx, setSliderIdx] = useState(0)

    // Auto-advance slider
    useEffect(() => {
        const interval = setInterval(() => {
            setSliderIdx(i => (i + 1) % REVIEWS.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="page-wrapper" ref={pageRef}>
            <Helmet>
                <title>MNC - Webflow HTML Website Template</title>
                <meta name="description" content="A modern corporate website template for a multinational company operating across multiple industries and countries, built to showcase global expertise." />
            </Helmet>

            {/* go-top anchor */}
            <div id="go-top"></div>

            <Header />

            <div className="main-wrapper">

                {/* ===== HERO / BANNER ===== */}
                <section className="banner-section">
                    <div
                        className="banner-block w-background-video w-background-video-atom"
                        style={{ position: 'relative', overflow: 'hidden' }}
                    >
                        <video
                            autoPlay loop muted playsInline
                            style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                            poster="https://cdn.prod.website-files.com/69368a5646568096095bb918%2F693fd56ac052eedbd0573984_Building%20Global%20Solutions%20for%20a%20Changing%20World_poster.0000000.jpg"
                        >
                            <source src="https://cdn.prod.website-files.com/69368a5646568096095bb918%2F693fd56ac052eedbd0573984_Building%20Global%20Solutions%20for%20a%20Changing%20World_mp4.mp4" type="video/mp4" />
                            <source src="https://cdn.prod.website-files.com/69368a5646568096095bb918%2F693fd56ac052eedbd0573984_Building%20Global%20Solutions%20for%20a%20Changing%20World_webm.webm" type="video/webm" />
                        </video>
                        <div className="home">
                            <div className="w-layout-blockcontainer container-default w-container">
                                <div className="home-block">
                                    <div className="home-tag-block">
                                        <div data-scroll-anim className="home-tag">
                                            <div className="home-tag-dot"></div>
                                            <div className="home-tag-text">Trusted by industry leaders</div>
                                        </div>
                                    </div>
                                    <div className="home-title-block">
                                        <h1 className="home-title">Building Global Solutions for a Changing World</h1>
                                    </div>
                                    <div className="home-except-block">
                                        <div data-scroll-anim className="home-except">
                                            Powering innovation across industries — from technology to manufacturing, logistics, finance, and beyond.
                                        </div>
                                    </div>
                                    <div className="home-button-block">
                                        <div data-scroll-anim className="home-button">
                                            <Button to="/solutions" variant="with-stoke-and-light">Explore Business</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== DETAILS / WHO WE ARE ===== */}
                <section className="details-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="details-block">
                                <div className="details-tag-block">
                                    <div className="details-tag">
                                        <div className="section-tag">who We are</div>
                                    </div>
                                </div>
                                <div className="details-text-block">
                                    <h2 data-scroll-anim className="details-text">
                                        <span className="details-text-01">We</span>{' '}
                                        <span className="details-text-02">innovate</span>{' '}
                                        <span className="details-text-03">across</span>{' '}
                                        <span className="details-text-04">technology,</span>{' '}
                                        <span className="details-text-05">finance,</span>{' '}
                                        <span className="details-text-06">logistics,</span>{' '}
                                        <span className="details-text-07">energy,</span>{' '}
                                        <span className="details-text-08">and</span>{' '}
                                        <span className="details-text-09">consumer</span>{' '}
                                        <span className="details-text-10">products</span>{' '}
                                        <span className="details-text-11">to</span>{' '}
                                        <span className="details-text-12">create</span>{' '}
                                        <span className="details-text-13">lasting</span>{' '}
                                        <span className="details-text-14">value</span>{' '}
                                        <span className="details-text-15">for</span>{' '}
                                        <span className="details-text-16">our</span>{' '}
                                        <span className="details-text-17">partners</span>{' '}
                                        <span className="details-text-18">and</span>{' '}
                                        <span className="details-text-19">communities.</span>
                                    </h2>
                                </div>
                                <div className="details-count-block">
                                    <div className="count-block">
                                        {[
                                            { val: '4+', label: 'Years Experience' },
                                            { val: '30M+', label: 'Employees Worldwide' },
                                            { val: '99%', label: 'Satisfied Customers' },
                                            { val: '$5B+', label: 'Energy cost savings' },
                                        ].map((s, i) => (
                                            <div key={i} data-scroll-anim className="count-wrap">
                                                <div className="count-num">
                                                    <div className="count-title">{s.val}</div>
                                                </div>
                                                <div className="count-text">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="details-partner-block">
                                    <div className="partner-block">
                                        <div data-scroll-anim className="partner-text-block">
                                            <div className="partner-text">Trusted Partner</div>
                                        </div>
                                        <div data-scroll-anim className="partner-logo-block">
                                            <div className="partner-loop">
                                                {PARTNER_LOGOS.map((src, i) => (
                                                    <img key={i} src={src} loading="lazy" alt="Partner Logo" className="partner-logo" />
                                                ))}
                                            </div>
                                            <div className="partner-loop" aria-hidden="true">
                                                {PARTNER_LOGOS.map((src, i) => (
                                                    <img key={i} src={src} loading="lazy" alt="" className="partner-logo" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== WHAT WE OFFER / SOLUTIONS ===== */}
                <section className="offer-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="offer-block">
                                <div className="offer-text-block">
                                    <div className="offer-text">
                                        <div className="section-tag-block">
                                            <div data-scroll-anim className="section-tag gray">What We Offer</div>
                                        </div>
                                        <div className="section-title-block">
                                            <h2 className="section-title white">
                                                Our core values define who we are, guide every decision we make,{' '}
                                                <span className="section-span _01">and</span>{' '}
                                                <span className="section-span _02">drive</span>{' '}
                                                <span className="section-span _03">us</span>{' '}
                                                <span className="section-span _04">forward</span>{' '}
                                                <span className="section-span _05">toward</span>{' '}
                                                <span className="section-span _06">long-term,</span>{' '}
                                                <span className="section-span _07">sustainable</span>{' '}
                                                <span className="section-span _08">success.</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="offer-card-block">
                                    {SOLUTIONS.map((s, idx) => (
                                        <div key={s.slug}>
                                            <div data-scroll-anim className={`offer-list-wrapper _0${idx + 1} w-dyn-list`}>
                                                <div role="list" className="offer-list w-dyn-items">
                                                    <div role="listitem" className="offer-item w-dyn-item">
                                                        <div className={`offer-card${s.white ? ' white' : ''}`}>
                                                            <div className="offer-details">
                                                                <div className="offer-num">{s.num}</div>
                                                                <h3 className="offer-name">{s.name}</h3>
                                                                <div className="offer-except">{s.desc}</div>
                                                                <div className="offer-button">
                                                                    <Button to={`/solution/${s.slug}`} variant="offer">Learn More</Button>
                                                                </div>
                                                            </div>
                                                            <div className="offer-images">
                                                                <img src={s.img} loading="eager" alt={s.name} className="offer-image" />
                                                                <div className="offer-overlay"></div>
                                                                <div className="offer-wrapper">
                                                                    {s.points.map((p, pi) => (
                                                                        <div key={pi} className="offer-point">
                                                                            <img src={CHECKBOX_ICON} loading="lazy" alt="Checkbox" className="offer-icon" />
                                                                            <div className="offer-wrap">
                                                                                <div className="offer-title">{p.title}</div>
                                                                                <div className="offer-info">{p.info}</div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {idx < SOLUTIONS.length - 1 && <div className="offer-blank-space"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== GLOBAL REACH ===== */}
                <section className="reach-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="reach-block">
                                <div className="reach-text-block">
                                    <div className="reach-text">
                                        <div className="section-tag-block">
                                            <div data-scroll-anim className="section-tag">Global Reach</div>
                                        </div>
                                        <div className="section-title-block">
                                            <h2 className="section-title">
                                                Operating worldwide, delivering reliable solutions{' '}
                                                <span className="section-span _01">across</span>{' '}
                                                <span className="section-span _02">global</span>{' '}
                                                <span className="section-span _03">markets</span>{' '}
                                                <span className="section-span _04">with</span>{' '}
                                                <span className="section-span _05">local</span>{' '}
                                                <span className="section-span _06">expertise</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="reach-card-block">
                                    <div data-scroll-scale className="reach-card bg">
                                        <div className="reach-wrap">
                                            <div className="review-num">
                                                <div className="review-title">23+</div>
                                            </div>
                                            <div className="review-title">Countries</div>
                                        </div>
                                        <div className="reach-except">Connected with active investors</div>
                                    </div>
                                    <img
                                        src="https://cdn.prod.website-files.com/69368a5646568096095bb918/6940041c6d73ae4adab9f53e_Global%20Reach%20Image%2001.avif"
                                        loading="eager"
                                        data-scroll-scale
                                        alt="Global Reach 01"
                                        className="reach-img"
                                    />
                                    <div data-scroll-scale className="reach-card white">
                                        <div className="reach-wrap">
                                            <div className="review-num">
                                                <div className="review-title">$3B</div>
                                            </div>
                                        </div>
                                        <div className="reach-except">Overall campaign investment average</div>
                                    </div>
                                    <img
                                        src="https://cdn.prod.website-files.com/69368a5646568096095bb918/6940074465aeacc51a4f58cd_Global%20Reach%20Image%2002.avif"
                                        loading="eager"
                                        data-scroll-scale
                                        alt="Global Reach 02"
                                        className="reach-img"
                                    />
                                    <div
                                        className="reach-video w-background-video w-background-video-atom"
                                        data-scroll-scale
                                        style={{ position: 'relative', overflow: 'hidden' }}
                                    >
                                        <video
                                            autoPlay loop muted playsInline
                                            style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                                            poster="https://cdn.prod.website-files.com/69368a5646568096095bb918%2F6940080988c34048ea2e23e5_Operating%20Worldwide_poster.0000000.jpg"
                                        >
                                            <source src="https://cdn.prod.website-files.com/69368a5646568096095bb918%2F6940080988c34048ea2e23e5_Operating%20Worldwide_mp4.mp4" type="video/mp4" />
                                            <source src="https://cdn.prod.website-files.com/69368a5646568096095bb918%2F6940080988c34048ea2e23e5_Operating%20Worldwide_webm.webm" type="video/webm" />
                                        </video>
                                    </div>
                                    <div data-scroll-scale className="reach-card black">
                                        <div className="reach-wrap">
                                            <div className="review-num"><div className="review-title">8,000+</div></div>
                                        </div>
                                        <div className="reach-except">Disruptive startups invested in Overall</div>
                                    </div>
                                    <div data-scroll-scale className="reach-card black">
                                        <div className="reach-wrap">
                                            <div className="review-num"><div className="review-title">$000B</div></div>
                                        </div>
                                        <div className="reach-except">Overall campaign investment average</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== TESTIMONIALS ===== */}
                <section className="review-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="review-block">
                                <div className="review-text-block">
                                    <div className="review-text">
                                        <div className="section-tag-block">
                                            <div className="section-tag">
                                                <a href="#" className="section-tag-link">Parent</a>
                                                <div className="section-tag-slash">/</div>
                                                <div className="section-tag-text">Testimonials</div>
                                            </div>
                                        </div>
                                        <div className="section-title-block">
                                            <h2 className="section-title">
                                                What our clients say about working with{' '}
                                                <span className="section-span _01">us</span>{' '}
                                                <span className="section-span">and</span>{' '}
                                                <span className="section-span _02">achieving</span>{' '}
                                                <span className="section-span _03">measurable</span>{' '}
                                                <span className="section-span _04">business</span>{' '}
                                                <span className="section-span _05">results.</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-card-block">
                                    {/* Tab nav */}
                                    <div className="review-tabs w-tabs">
                                        <div className="review-tab-menu w-tab-menu">
                                            {REVIEWS.map((r, i) => (
                                                <button
                                                    key={r.id}
                                                    className={`review-logo w-inline-block w-tab-link${activeTab === i ? ' w--current' : ''}`}
                                                    onClick={() => setActiveTab(i)}
                                                >
                                                    <span style={{ padding: '0 8px', fontSize: '12px', opacity: 0.7 }}>{r.logo}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="review-tab-pane w-tab-content">
                                            {REVIEWS.map((r, i) => (
                                                <div
                                                    key={r.id}
                                                    data-w-tab={`Tab ${i + 1}`}
                                                    className={`review-slide w-tab-pane${activeTab === i ? ' w--tab-active' : ''}`}
                                                    style={{ display: activeTab === i ? 'block' : 'none' }}
                                                >
                                                    <div className="review-card">
                                                        <div className="review-details">
                                                            <div className="review-rating">
                                                                <img src={RATING_ICON} loading="lazy" alt="4.9" className="review-rating-icon" />
                                                                <div className="review-rating-text">{r.rating}</div>
                                                            </div>
                                                            <h5 className="review-except">{r.quote}</h5>
                                                            <div className="review-wrapp">
                                                                <div className="review-info">
                                                                    <div className="review-info-title">{r.funding}</div>
                                                                    <div className="review-info-text">Funding Raised</div>
                                                                </div>
                                                                <div className="review-info">
                                                                    <div className="review-info-title">{r.years}</div>
                                                                    <div className="review-info-text">Years of Collaboration</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-author">
                                                            <img src={r.img} loading="eager" alt={r.author} className="review-author-image" />
                                                            <div className="review-author-name">{r.author}</div>
                                                            <div className="review-author-desig">{r.role}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Auto-play slider */}
                                    <div className="review-line"></div>
                                    <div className="review-slider w-slider" style={{ position: 'relative', overflow: 'hidden' }}>
                                        <div className="review-mask w-slider-mask">
                                            <div className="review-slide w-slide">
                                                <div className="review-card">
                                                    <div className="review-details">
                                                        <div className="review-rating">
                                                            <img src={RATING_ICON} loading="eager" alt="4.9" className="review-rating-icon" />
                                                            <div className="review-rating-text">{REVIEWS[sliderIdx].rating}</div>
                                                        </div>
                                                        <h5 className="review-except">{REVIEWS[sliderIdx].quote}</h5>
                                                    </div>
                                                    <div className="review-author">
                                                        <img src={REVIEWS[sliderIdx].img} loading="eager" alt={REVIEWS[sliderIdx].author} className="review-author-image" />
                                                        <div className="review-author-name">{REVIEWS[sliderIdx].author}</div>
                                                        <div className="review-author-desig">{REVIEWS[sliderIdx].role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-arrow w-slider-arrow-left" onClick={() => setSliderIdx(i => (i - 1 + REVIEWS.length) % REVIEWS.length)}>
                                            <div className="w-icon-slider-left"></div>
                                        </div>
                                        <div className="review-arrow w-slider-arrow-right" onClick={() => setSliderIdx(i => (i + 1) % REVIEWS.length)}>
                                            <div className="w-icon-slider-right"></div>
                                        </div>
                                        <div className="review-nav w-slider-nav w-round w-num">
                                            {REVIEWS.map((_, i) => (
                                                <div key={i} className={`w-slider-dot${i === sliderIdx ? ' w-active' : ''}`} onClick={() => setSliderIdx(i)} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== INSIGHTS / BLOG ===== */}
                <section className="insights-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="insights-block">
                                <div className="insights-text-block">
                                    <div className="insights-title-block">
                                        <div className="insights-title">
                                            <div className="section-tag-block">
                                                <div data-scroll-anim className="section-tag">Latest Insights</div>
                                            </div>
                                            <div className="section-title-block">
                                                <h2 data-scroll-anim className="section-title">Latest insights and trends</h2>
                                            </div>
                                        </div>
                                        <div data-scroll-anim className="insights-button">
                                            <Button to="/blog" variant="dark">View All Posts</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="insights-card-block w-dyn-list">
                                    <div role="list" className="insights-list w-dyn-items">
                                        {BLOG_POSTS.map((post) => (
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
                    </div>
                </section>

                {/* ===== CTA BANNER ===== */}
                <section className="cta-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="cta-block">
                                <div className="cta-text-block">
                                    <h2 data-scroll-anim className="cta-title">Let's Start Talk</h2>
                                    <div data-scroll-anim className="cta-except">
                                        Ready to take the next step? Our team is here to help you navigate your journey to global success.
                                    </div>
                                </div>
                                <div data-scroll-anim className="cta-button-block">
                                    <Button to="/contact-us" variant="dark">Contact us</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Go to top */}
            <a href="#go-top" className="go-top-wrap w-inline-block">
                <div className="go-top-text">Go To Top</div>
            </a>

            <Footer />
        </div>
    )
}
