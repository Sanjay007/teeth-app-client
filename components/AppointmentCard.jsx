import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Badge from './common/Badge'

import ToothSvg from '../assets/svg/ToothSvg'
import DiagnosisSvg from '../assets/svg/DiagnosisSvg'

const AppointmentCard = ({ dentNumber, diagnosis, date, time, price }) => {
  return (
    <AppointmentCardWrapper>
      <MoreButton>
        <Ionicons name="md-more" size={24} color="rgba(0, 0, 0, .4)" />
      </MoreButton>
      <AppointmentCardRow>
        <ToothSvg />
        <AppointmentCardLabel>Tooth: <Text style={{ fontWeight: '500' }}>{dentNumber}</Text></AppointmentCardLabel>
      </AppointmentCardRow>
      <AppointmentCardRow>
        <DiagnosisSvg />
        <AppointmentCardLabel>Diagnosis: <Text style={{ fontWeight: '500' }}>{diagnosis}</Text></AppointmentCardLabel>
      </AppointmentCardRow>
      <AppointmentCardRow style={{ marginTop: 15, justifyContent: 'space-between' }}>
        <Badge active={true} text={`${date} - ${time}`} role="date" />
        <Badge active={false} text={`$${price}`} role="price" />
      </AppointmentCardRow>
    </AppointmentCardWrapper>
  )
}

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`

const MoreButton = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: 18px;
`

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`

const AppointmentCardWrapper = styled.View`
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .08);
  margin-bottom: 10px;
`

export default AppointmentCard
