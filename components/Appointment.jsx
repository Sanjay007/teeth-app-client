import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import GreyText from './common/GreyText'
import Badge from './common/Badge'

import getAvatarColor from '../utils/getAvatarColor'

const Appointment = ({ item, navigation }) => {

  const { patient, is_active, time, diagnosis } = item
  const avatarColors = getAvatarColor(patient.fullName[0].toUpperCase())

  return (
    <GroupItem onPress={() => navigation.navigate('Patient', item)}>
      <Avatar style={{ backgroundColor: avatarColors.backgroundColor }}>
        <Letter style={{ color: avatarColors.color }}>{patient.fullName[0].toUpperCase()}</Letter>
      </Avatar>
      <View style={{ flex: 1 }}>
        <FullName>{patient.fullName}</FullName>
        <GreyText>{diagnosis}</GreyText>
      </View>
      <Badge active={is_active} text={time} role="time" />
    </GroupItem >
  )
}

Appointment.defaultProps = {
  title: 'Untitled',
  items: []
}

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`


const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`
const Letter = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: -1px;
`

const Avatar = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

export default Appointment

