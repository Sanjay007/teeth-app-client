import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, Linking } from 'react-native'
import { Foundation } from '@expo/vector-icons'

import GreyText from '../components/common/GreyText'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import AppointmentCard from '../components/AppointmentCard'
import PlusButton from '../components/common/PlusButton'

import { patientsApi } from '../utils/api'



const PatientScreen = ({ route, navigation }) => {

  const { patient } = route.params
  const [patientData, setPatientData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    patientsApi.showAppointments(patient._id)
      .then(({ data }) => {
        const { _id, fullName, phone, appointments } = data.data
        setPatientData({
          fullName,
          phone,
          appointments,
          patientId: _id
        })
        setIsLoading(false)
      })
      .catch(err => {
        alert('Ups, something gone wrong')
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  return (
    <Wrapper>

      {isLoading ? (
        <ActivityIndicator size="large" color="#2a86ff" />
      ) : (
          <>
            <PatientDetails>
              <PatientFullName>{patientData.fullName}</PatientFullName>
              <GreyText>{patientData.phone}</GreyText>

              <PatientButtons>
                <FormulaButton>
                  <Button text="Tooth formula" />
                </FormulaButton>
                <PhoneButton>
                  <Button onPress={() => Linking.openURL('tel:' + patientData.phone)} style={{ display: 'flex', alignItems: 'center' }} color="#84D269">
                    <Foundation name="telephone" size={22} color="white" />
                  </Button>
                </PhoneButton>
              </PatientButtons>
            </PatientDetails>

            <PatientAppointments>
              <Container>
                {patientData.appointments.map(appointment => {
                  const { _id, dentNumber, diagnosis, date, time, price } = appointment
                  return <AppointmentCard key={_id} dentNumber={dentNumber} diagnosis={diagnosis} date={date} time={time} price={price} />
                })}
              </Container>
            </PatientAppointments>
            <PlusButton onPress={() => navigation.navigate('AddAppointment')} />
          </>
        )}
    </Wrapper>
  )
}

const PatientAppointments = styled.View`
  flex: 1;
  background: #f8fafd;
`

const FormulaButton = styled.View`
  flex: 1;
`

const PhoneButton = styled.View`
  margin-left: 10px;
  width: 45px;
`

const PatientButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 2px;
`

const PatientDetails = styled.View`
  padding: 0 25px;
  flex: .3;
`

const Wrapper = styled(Container)`
  background: #fff;
  padding: 25px 0 0 0;
`

export default PatientScreen
