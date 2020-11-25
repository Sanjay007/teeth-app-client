import axios from '../../core/axios'


export default {
  get: () => axios.get('/patients'),
  add: values => axios.post('/patients', values),
  showAppointments: patient_id => axios.get(`/patients/${patient_id}`)
}