import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Footer from '../components/footer'
import ServicesSection from '../components/services'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ServicesSection />
    <Footer />
  </Layout>
)

export default IndexPage

