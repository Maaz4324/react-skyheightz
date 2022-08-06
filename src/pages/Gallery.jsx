import React from 'react'
import PictureGallery from './Gallery/PictureGallery'
import YoutubeGallery from './Gallery/YoutubeGallery'
import { Helmet } from 'react-helmet'


function Gallery() {
  return (
    <div>
      <Helmet>
        <title>SkyHeightz-Gallery</title>
        <meta name='description' content='SkyHeightz coaching classes - Gallery'></meta>
        <link rel="canonical" href="/gallery" />
</Helmet>
        <PictureGallery/>
        <YoutubeGallery/>
    </div>
  )
}

export default Gallery