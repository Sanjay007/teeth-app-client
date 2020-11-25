import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

const PlusButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons name="ios-add" size={36} color="white" />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  bottom: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  /* box-shadow: 0px 4px 10px rgba(42, 134, 255, .4); */
`

export default PlusButton
