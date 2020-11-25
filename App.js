import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import PatientScreen from './screens/PatientScreen'
import AddPatientScreen from './screens/AddPatientScreen'
import AddAppointmentScreen from './screens/AddAppointmentScreen'



const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            elevation: 0,
            backgroundColor: '#fff'
          },
          headerTintColor: '#2a86ff',
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 28
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Appointments'
          }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{
            title: 'Patient Card',
            headerTitleStyle: {
              fontWeight: '800',
              fontSize: 24
            }
          }}
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatientScreen}
          options={{
            title: 'Add Patient',
            headerTitleStyle: {
              fontWeight: '800',
              fontSize: 24
            }
          }}
        />
        <Stack.Screen
          name="AddAppointment"
          component={AddAppointmentScreen}
          options={{
            title: 'Add Appointment',
            headerTitleStyle: {
              fontWeight: '800',
              fontSize: 24
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App



