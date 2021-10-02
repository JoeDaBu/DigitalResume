import React from 'react'
import { SideCon, Wrapper } from './Sidebar.styles'
import Sponge from '../../images/spongebob.gif'
import { GithubIcon, YoutubeIcon, InstagramIcon, LinkedInIcon, GithubIcon512, InstagramIcon128, YoutubeIcon512, InstagramIcon512, LinkedInIcon512 } from '../../images'


const Sidebar = () => {
  return (
    <Wrapper>

      <a href='https://github.com/JoeDaBu' target='_blank' rel='noopener noreferrer'>
        <SideCon src={GithubIcon512}>
        </SideCon>
      </a>
      <a href='https://www.linkedin.com/in/joe-bu' target='_blank' rel='noopener noreferrer'>
        <SideCon src={LinkedInIcon512}></SideCon>
      </a>
      <a href='https://www.youtube.com/channel/UCAD2nN-2LmE6msWgTLvzJFg' target='_blank' rel='noopener noreferrer'>
        <SideCon src={YoutubeIcon512}></SideCon>
      </a>
      <a href='https://www.instagram.com/joegbu/' target='_blank' rel='noopener noreferrer'>
        <SideCon src={InstagramIcon512}></SideCon>
      </a>
    </Wrapper>
  )
}

export default Sidebar
