import axios from 'axios'


export const getUser = () => axios('http://localhost:8080/api/v1/user/u/4', {
  method: 'GET',
  mode: 'no-cors',
})
