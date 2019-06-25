import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p><Link to="/contact">Contact</Link> me</p>
    </Layout>
  )
}

export default AboutPage