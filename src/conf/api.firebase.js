import * as axios from 'axios'

const apiFirebase = axios.create({
    baseURL: 'https://film-17-04.firebaseio.com/'
})

export default apiFirebase