import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import FloatingButtons from './components/layout/FloatingButtons'
import './App.css'

// Below-the-fold sections are code-split so the hero paints instantly.
const WhyChoose = lazy(() => import('./components/sections/WhyChoose'))
const FeaturedCar = lazy(() => import('./components/sections/FeaturedCar'))
const OtherCars = lazy(() => import('./components/sections/OtherCars'))
const WhyBuyFronx = lazy(() => import('./components/sections/WhyBuyFronx'))
const Finance = lazy(() => import('./components/sections/Finance'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Process = lazy(() => import('./components/sections/Process'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/layout/Footer'))

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <a href="#why-choose" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <WhyChoose />
          <FeaturedCar />
          <OtherCars />
          <WhyBuyFronx />
          <Finance />
          <Testimonials />
          <Process />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingButtons />
    </>
  )
}
