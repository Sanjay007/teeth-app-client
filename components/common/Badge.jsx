import React from 'react'
import styled from 'styled-components/native'


const Badge = ({ text, active, role }) => {
  return (
    <GroupDate active={active} role={role} >
      <DateItem active={active} role={role}>{text}</DateItem>
    </GroupDate>
  )
}

const DateItem = styled.Text`
  color: ${props => props.role === 'price' ? '#618842' : (props.active ? '#fff' : '#4294ff')};
  font-weight: 600;
  font-size: 14px;
`;

const GroupDate = styled.View`
  background: ${props => props.role === 'price' ? 'rgba(132, 210, 105, .21)' : (props.active ? '#2a86ff' : '#e9f5ff')};
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  padding: ${props => props.role === 'time' ? '8px 16px' : (props.role === 'date' ? '8px 20px' : '8px 16px')};
`;

export default Badge

