import React from 'react'
import { Wrapper, Image } from './Iframe.styles'

const YoutubeImage = ({embedId, video}) => {
  return (
    <Wrapper>
      <Image 
        // width='853'
        // height='480'
        border='none'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='YoutubeLink'
        src="https://www.youtube.com/embed/XatXy6ZhKZw"
      />
    </Wrapper>
  )
}

export default YoutubeImage
