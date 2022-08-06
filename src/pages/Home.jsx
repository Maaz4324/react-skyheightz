import React from 'react'
import Topper from './Home/Topper'
import Testimonial from './Home/Testimonial'
import About from './Home/About'
import Intro from './Home/Intro'
import Course from './Home/Course'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
      <Helmet>
        <title>SkyHeightz-Home</title>
        <meta name='description' content='SkyHeightz coaching classes in howrah'></meta>
        <link rel="canonical" href="/home" />
      </Helmet>
        <Intro/>
        <Course/>
        <Topper/>
        <Testimonial/>
        <About/>
    </div>
  )
}

export default Home