import React from 'react'
import { SideCon, Wrapper } from './Sidebar.styles'
import Sponge from '../../images/spongebob.gif'
import { a } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Wrapper>

      <a href='https://github.com/JoeDaBu' target='_blank' rel='noopener noreferrer'>
        <SideCon src={Sponge}>
        </SideCon>
      </a>
      <a href='https://www.linkedin.com/in/joe-bu' target='_blank' rel='noopener noreferrer'>
        <SideCon src={Sponge}></SideCon>
      </a>
      <a href='https://www.youtube.com/channel/UCAD2nN-2LmE6msWgTLvzJFg' target='_blank' rel='noopener noreferrer'>
        <SideCon src={Sponge}></SideCon>
      </a>
      <a href='https://www.instagram.com/joegbu/' target='_blank' rel='noopener noreferrer'>
        <SideCon src={Sponge}></SideCon>
      </a>
    </Wrapper>
  )
}

export default Sidebar
