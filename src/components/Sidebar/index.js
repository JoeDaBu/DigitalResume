import React from 'react'
import { SideCon, Wrapper } from './Sidebar.styles'
import Sponge from '../../images/spongebob.gif'

const Sidebar = () => {
  return (
    <Wrapper>
      <SideCon src={Sponge}>
      </SideCon>
      <SideCon src={Sponge}>
      </SideCon>
      <SideCon src={Sponge}>
      </SideCon>
      <SideCon src={Sponge}>
      </SideCon>
    </Wrapper>
  )
}

export default Sidebar
