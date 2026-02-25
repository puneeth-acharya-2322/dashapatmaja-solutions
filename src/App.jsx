import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Solutions from './pages/Solutions'
import Sustainability from './pages/Sustainability'
import Investors from './pages/Investors'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import SolutionPage from './pages/SolutionPage'
import InvestorPage from './pages/InvestorPage'
import StoryPage from './pages/StoryPage'
import BlogPost from './pages/BlogPost'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/solution/:slug" element={<SolutionPage />} />
        <Route path="/investor/:slug" element={<InvestorPage />} />
        <Route path="/story/:slug" element={<StoryPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
