import React from 'react'
import styled from 'styled-components/native'

const SectionTitle = ({ title }) => {
  return (
    <GroupTitle>{title}</GroupTitle>
  )
}

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
  padding: 17px 20px;
  background: #fff;
`

export default SectionTitle
