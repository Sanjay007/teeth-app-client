import React from 'react'
import styled from 'styled-components'

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.View`
  display: flex;
  justify-content: flex-start;
`

const HeaderTitle = styled.Text`
  color: #2a86ff;
  font-weight: 800;
  font-size: 28px;
`

export default Header
