import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

const SOLUTIONS_LINKS = [
    { href: '/solution/digital-solutions', label: 'Digital Solutions' },
    { href: '/solution/renewable-energy', label: 'Renewable Energy' },
    { href: '/solution/finance-investment', label: 'Finance & Investment' },
    { href: '/solution/healthcare-innovations', label: 'Healthcare Innovations' },
    { href: '/solution/logistic-solutions', label: 'Logistic Solutions' },
    { href: '/solution/real-estate-solutions', label: 'Real Estate Solutions' },
]

const PAGES_LINKS = [
    { href: '/about-us', label: 'About Us' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/investors', label: 'Investors' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/404', label: '404' },
]

const DROPDOWN_ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 8" fill="none" className="header-dropdown-icon">
        <path d="M0.534261 0.454916C0.77776 0.206533 1.1588 0.183953 1.4273 0.387175L1.50423 0.454916L7.00004 6.06118L12.4959 0.454916C12.7394 0.206533 13.1204 0.183953 13.3889 0.387175L13.4658 0.454916C13.7093 0.703299 13.7315 1.09198 13.5322 1.36587L13.4658 1.44434L7.48502 7.54508C7.24153 7.79347 6.86049 7.81605 6.59198 7.61282L6.51506 7.54508L0.534261 1.44434C0.266412 1.17112 0.266412 0.728137 0.534261 0.454916Z" fill="currentColor" />
    </svg>
)

function Dropdown({ label, links, half }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    // Close on outside click
    useEffect(() => {
        const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
        document.addEventListener('mousedown', fn)
        return () => document.removeEventListener('mousedown', fn)
    }, [])

    const mid = Math.ceil(links.length / 2)
    const first = links.slice(0, mid)
    const second = links.slice(mid)

    return (
        <div
            ref={ref}
            className={`header-dropdown w-dropdown${open ? ' w--open' : ''}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className="header-toggle w-dropdown-toggle" onClick={() => setOpen(!open)}>
                <div className="header-dropdown-text">{label}</div>
                {DROPDOWN_ARROW}
            </div>
            <nav className={`header-wrapp w-dropdown-list${open ? ' w--open' : ''}`} style={{ display: open ? 'block' : '' }}>
                <div className={`w-layout-grid header-megamenu ${label.toLowerCase()}`}>
                    <div className="header-mega-wrap">
                        {first.map((l) => (
                            <Link key={l.href} to={l.href} aria-label="Nav Link" className="header-menu-link" onClick={() => setOpen(false)}>
                                {l.label}
                            </Link>
                        ))}
                    </div>
                    <div className="header-mega-wrap">
                        {second.map((l) => (
                            <Link key={l.href} to={l.href} aria-label="Nav Link" className="header-menu-link" onClick={() => setOpen(false)}>
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div
            data-animation="default"
            className="header-section w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-wf--header-section--variant="image"
            data-collapse="medium"
            role="banner"
            data-duration="400"
        >
            <div className="container-default w-container">
                <div className="header-block">
                    <div className="header-brand-block">
                        <Link
                            aria-label="Logo"
                            to="/"
                            aria-current={isHome ? 'page' : undefined}
                            className={`header-brand w-nav-brand${isHome ? ' w--current' : ''}`}
                        >
                            <img
                                loading="eager"
                                src="https://cdn.prod.website-files.com/69368a5646568096095bb918/6936a643804cd42e894bcdde_d10e6604bf1e88d7cf857b091f8a974d_Logo.svg"
                                alt="MNC"
                                className="header-brand-logo"
                            />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav role="navigation" className={`header-menu-block w-nav-menu${mobileOpen ? ' w--nav-menu-open' : ''}`}>
                        <div className="header-menu">
                            <div className="header-menu-wrap">
                                <Link to="/" aria-current={isHome ? 'page' : undefined} className={`header-menu-link w-nav-link${isHome ? ' w--current' : ''}`}>
                                    Home
                                </Link>
                                <Dropdown label="Solutions" links={SOLUTIONS_LINKS} />
                                <Link to="/about-us" className="header-menu-link w-nav-link">About Us</Link>
                                <Dropdown label="Pages" links={PAGES_LINKS} />
                                <Link to="/contact-us" className="header-menu-link w-nav-link">Contact Us</Link>
                            </div>
                            <div className="header-button-wrap">
                                <Button to="/solutions" variant="dark">Explore Business</Button>
                            </div>
                        </div>
                    </nav>

                    {/* CTA button (shown outside nav on desktop) */}
                    <div className="header-button-block">
                        <Button to="/solutions" variant="dark">Explore Business</Button>
                    </div>

                    {/* Mobile hamburger */}
                    <div
                        className={`header-menu-button w-nav-button${mobileOpen ? ' w--open' : ''}`}
                        aria-label="menu"
                        role="button"
                        tabIndex={0}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <div className="header-line-wrap">
                            <div className="top"></div>
                            <div className="middle"></div>
                            <div className="bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
