import React from 'react'
import styled from 'styled-components/native'

const Button = ({ children, color, onPress, text }) => {
  return (
    <ButtonContainer onPress={onPress} color={color}>
      <ButtonView>{children}</ButtonView>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  color: '#2a86ff'
}


const ButtonView = styled.View`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
`

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
`

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  background: ${props => props.color};
  text-align: center;
  height: 45px;
`

export default Button
