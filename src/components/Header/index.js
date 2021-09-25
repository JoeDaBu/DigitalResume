import React from 'react'
import { LinkH, Wrapper, LinkE } from './Header.styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper>
      <Link to = '/'>
        <LinkH>
          Joe Bu
        </LinkH>
      </Link>
      <Link to='/projects'>
        <LinkH>
          Projects
        </LinkH>
      </Link>
      <Link to='/work'>
        <LinkH>
          Work
        </LinkH>
      </Link>
      <Link to='/timeline'>
        <LinkH>
          Timeline
        </LinkH>
      </Link>
       <Link to='/contact'>
        <LinkE>
          Contact
        </LinkE>
      </Link>
      </Wrapper>
  )
}

export default Header
