import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { Item, Input, Label } from 'native-base'

import Button from '../components/common/Button'
import Container from '../components/common/Container'

import { patientsApi } from '../utils/api'


const AddPatientScreen = ({ route, navigation }) => {

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
        <Label>Name of Patient</Label>
        <Input onChange={e => handleChange('fullName', e.nativeEvent.text)} value={values.fullName} autoFocus clearButtonMode='while-editing' />
      </Item>
      <Item floatingLabel style={{ marginTop: 5 }}>
        <Label>Phone number</Label>
        <Input onChange={e => handleChange('phone', e.nativeEvent.text)} value={values.phone} dataDetectorTypes='phoneNumber' keyboardType='phone-pad' clearButtonMode='while-editing' />
      </Item>
      <ButtonView>
        <Button onPress={onSubmit} text="Add patient" color="#87cc6f" style={{ display: 'flex', justifyContent: 'center' }}>
          <Ionicons style={{ marginRight: 4 }} name="ios-add" size={20} color="white" />
        </Button>
      </ButtonView>
    </ScreenContainer>
  )
}

const ButtonView = styled.View`
  flex: 1;
  margin-top:30px;
`

const ScreenContainer = styled(Container)`
  background: #fff;
`


export default AddPatientScreen
