'use strict'

import axios from 'axios'
import { baseURL, baseURLIndonesia } from './index'

//Store data from API using axios

const create = () => {
  let API = axios.create({
    baseURL,
    timeout: 30000
  })

  let API_INDONESIA = axios.create({
    baseURL: baseURLIndonesia,
    timeout: 30000
  })


  const getAllCases = () => {
    return API.get('all')
  }

  const getAllCountriesCases = () => {
    return API.get('countries')
  }

  const getCountriesCases = (country) => {
    return API.get(`countries/${country}`)
  }

  const getCovidIndonesia = () => {
    return API_INDONESIA.get()
  }

  return {
    getAllCases,
    getAllCountriesCases,
    getCountriesCases,
    getCovidIndonesia
  }
}

export default { create }