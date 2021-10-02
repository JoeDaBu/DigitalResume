import React from 'react'
import { LinkH, Wrapper, LinkE, SLink } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <SLink to = '/'>
        <LinkH>
          Joe Bu
        </LinkH>
      </SLink>
      <SLink to='/projects'>
        <LinkH>
          Projects
        </LinkH>
      </SLink>
      <SLink to='/work'>
        <LinkH>
          Work
        </LinkH>
      </SLink>
      <SLink to='/timeline'>
        <LinkH>
          Timeline
        </LinkH>
      </SLink>
       <SLink to='/contact'>
        <LinkE>
          Contact
        </LinkE>
      </SLink>
      </Wrapper>
  )
}

export default Header
