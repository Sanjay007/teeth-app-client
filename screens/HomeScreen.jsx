import React from 'react'
import styled from 'styled-components/native'
import { SectionList, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Swipeable from 'react-native-swipeable-row'

import Appointment from '../components/Appointment'
import SectionTitle from '../components/SectionTitle'
import PlusButton from '../components/common/PlusButton'
import { appointmentsApi } from '../utils/api'



const HomeScreen = ({ navigation }) => {


  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchAppointments = () => {
    setIsLoading(true)
    appointmentsApi
      .get()
      .then(({ data }) => {
        setData(data.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }

  React.useEffect(fetchAppointments, [])
  const removeAppointment = id => {
    Alert.alert(
      'Remove the appointment',
      'Do you really want to remove the appointment?',
      [
        {
          text: 'Remove',
          onPress: () => {
            setIsLoading(true)
            appointmentsApi
              .remove(id)
              .then(() => {
                fetchAppointments()
              })
              .catch(err => {
                console.log(err)
                setIsLoading(false)
              })
            // const appointmentsList = data.map(day => {
            //   day.data = day.data.filter(item => item._id !== id)
            //   return day
            // })
            // const result = appointmentsList.filter(day => day.data.length)
            // setData(result)
            // setIsLoading(false)
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel'
        }

      ], { cancelable: false }
    )
  }

  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
          keyExtractor={item => item._id}
          onRefresh={fetchAppointments}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <Swipeable rightButtons={[
              <SwipeViewButton style={{ backgroundColor: '#84c1cb' }}>
                <Ionicons style={{ position: 'absolute', top: '34%', left: '7%' }} name="md-create" size={26} color="white" />
              </SwipeViewButton>,
              <SwipeViewButton onPress={() => removeAppointment(item._id)} style={{ backgroundColor: '#f85a5a' }}>
                <Ionicons style={{ position: 'absolute', top: '20%', left: '7%' }} name="ios-close" size={48} color="white" />
              </SwipeViewButton>

            ]}>
              <Appointment item={item} navigation={navigation} />
            </Swipeable>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle title={title} />
          )}
        />
      )}
      <PlusButton onPress={() => navigation.navigate('AddPatient')} />
    </Container>
  )
}

const SwipeViewButton = styled.TouchableOpacity`
  flex: 1;
  position: relative;
`

const SwipeView = styled.View`
  width: 100px;
  background-color: red;
`

const Container = styled.View`
  flex: 1;
  background: #fff;
`

export default HomeScreen
