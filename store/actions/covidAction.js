'use strict'

import API from '../constants/utilitiesAPI'
import {
  GET_ALL_CASES, GET_ALL_CASES_START, GET_ALL_CASES_STOP, 
  GET_ALL_COUNTRIES_START, GET_ALL_COUNTRIES, GET_ALL_COUNTRIES_STOP,
  GET_COUNTRIES_START, GET_COUNTRIES, GET_COUNTRIES_STOP,
  GET_COVID_INDONESIA_START, GET_COVID_INDONESIA, GET_COVID_INDONESIA_STOP
} from '../constants'

let api = API.create()

export const getAllCases = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading())
               
      let result = await api.getAllCases()         
      dispatch(fetchAllCases(result.data))
      
      dispatch(hideLoading())
    } catch (e) {
      throw e
    }
  }
}

export const getAllCountriesCases = () => {
  return async (dispatch) => {
    try {
      dispatch(showAllLoadingCountries())

      let result = await api.getAllCountriesCases()
      dispatch(fetchAllCountriesCases(result.data))

      dispatch(hideAllLoadingCountries())

    } catch (e) {
      throw e
    }
  }
}

export const getCountriesCases = (country) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingCountries())
  
      let result = await api.getCountriesCases(country)
      dispatch(fetchCountriesCases(result.data))
  
      dispatch(hideLoadingCountries())
  
    } catch (e) {
      throw e
    }
  }
}

export const getCovidIndonesia = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingCovidIndonesia())
  
      let result = await api.getCovidIndonesia()      
      dispatch(fetchCovidIndonesia(result.data.features))
  
      dispatch(hideLoadingCovidIndonesia())
  
    } catch (e) {
      throw e
    }
  }
}

function fetchAllCases(listAllCases) {
  return {
    type: GET_ALL_CASES,
    listAllCases
  }
}

function fetchAllCountriesCases(listAllCountriesCases) {
  return {
    type: GET_ALL_COUNTRIES,
    listAllCountriesCases
  }
}

function fetchCountriesCases(listCountriesCases) {
  return {
    type: GET_COUNTRIES,
    listCountriesCases
  }
}

function fetchCovidIndonesia(listCovidIndonesia) {
  return {
    type: GET_COVID_INDONESIA,
    listCovidIndonesia
  }
}

function showLoading() {
  return {
    type: GET_ALL_CASES_START
  }
}

function hideLoading() {
  return {
    type: GET_ALL_CASES_STOP
  }
}

function showAllLoadingCountries() {
  return {
    type: GET_ALL_COUNTRIES_START
  }
}

function hideAllLoadingCountries() {
  return {
    type: GET_ALL_COUNTRIES_STOP
  }
}

function showLoadingCountries() {
  return {
    type: GET_COUNTRIES_START
  }
}

function hideLoadingCountries() {
  return {
    type: GET_COUNTRIES_STOP
  }
}

function showLoadingCovidIndonesia() {
  return {
    type: GET_COVID_INDONESIA_START
  }
}

function hideLoadingCovidIndonesia() {
  return {
    type: GET_COVID_INDONESIA_STOP
  }
}