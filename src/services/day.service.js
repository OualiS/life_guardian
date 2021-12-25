import axios from 'axios'
var test = require('./services.env.js')

const API_URL = test.default + '/api/'
// const API_URL = 'https://444fc0850448.ngrok.io/api/'

class DayService {
  newDay () {
    return axios
      .post(API_URL + 'day/newDay', {
      })
      .then(response => {
        return response.data
      })
  }
}

export default new DayService()
