import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Inghelbrecht Agency!">
        <p>Lorem ipsum</p>
        <StaticImage
          alt="home baner!"
          src="../images/home-banner-hd.jpg"
        />
      </Layout>
    </main>
  )
}

export default IndexPage