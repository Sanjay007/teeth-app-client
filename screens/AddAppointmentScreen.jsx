import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Item, Input, Label, DatePicker } from 'native-base'

import Button from '../components/common/Button'
import Container from '../components/common/Container'

import { appointmentsApi } from '../utils/api'


const AddAppointmentScreen = ({ route, navigation }) => {

  const [values, setValues] = React.useState({})

  const handleChange = (name, text) => {
    setValues({
      ...values,
      [name]: text
    })
  }

  const onSubmit = async () => {
    try {
      await patientsApi.add(values)
      alert('OK')
      navigation.navigate('Home')
    } catch (err) {
      alert('Ups, something gone wrong..')
      console.log(err)
    }
  }

  return (
    <ScreenContainer>
      <Item floatingLabel style={{ marginLeft: 0 }}>
        <Label>Dent number</Label>
        <Input onChange={e => handleChange('dentNumber', e.nativeEvent.text)} value={values.dentNumber} autoFocus keyboardType='numeric' clearButtonMode='while-editing' />
      </Item>
      <Item floatingLabel style={{ marginTop: 5 }}>
        <Label>Diagnosis</Label>
        <Input onChange={e => handleChange('diagnosis', e.nativeEvent.text)} value={values.diagnosis} clearButtonMode='while-editing' />
      </Item>
      <Item floatingLabel style={{ marginTop: 5 }}>
        <Label>Price</Label>
        <Input onChange={e => handleChange('price', e.nativeEvent.text)} value={values.price} dataDetectorTypes='phoneNumber' keyboardType='decimal-pad' clearButtonMode='while-editing' />
      </Item>
      <Item style={{ marginTop: 13 }}>
        <TimeRow>
          <View style={{ flex: 1 }}>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date()}
              locale={"en"}
              modalTransparent={true}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={e => handleChange('date', e)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date()}
              locale={"en"}
              modalTransparent={true}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={e => handleChange('date', e)}
            />
          </View>
        </TimeRow>
      </Item>
      <ButtonView>
        <Button onPress={onSubmit} text="Add appointment" color="#87cc6f" style={{ display: 'flex', justifyContent: 'center' }}>
          <Ionicons style={{ marginRight: 4 }} name="ios-add" size={20} color="white" />
        </Button>
      </ButtonView>
    </ScreenContainer>
  )
}


const TimeRow = styled.View`
  flex-direction: row;
`

const ButtonView = styled.View`
  flex: 1;
  margin-top:30px;
`

const ScreenContainer = styled(Container)`
  background: #fff;
`


export default AddAppointmentScreen
