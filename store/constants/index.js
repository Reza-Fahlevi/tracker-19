//Retrieve data from API
'use strict'

export const GET_ALL_CASES_START = 'GET_ALL_CASES_START'
export const GET_ALL_CASES = 'GET_ALL_CASES'
export const GET_ALL_CASES_STOP = 'GET_ALL_CASES_STOP'

export const GET_ALL_COUNTRIES_START = 'GET_ALL_COUNTRIES_START'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_ALL_COUNTRIES_STOP = 'GET_ALL_COUNTRIES_STOP'

export const GET_COUNTRIES_START = 'GET_COUNTRIES_START'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_STOP = 'GET_COUNTRIES_STOP'

export const GET_COVID_INDONESIA_START = 'GET_COVID_INDONESIA_START'
export const GET_COVID_INDONESIA = 'GET_COVID_INDONESIA'
export const GET_COVID_INDONESIA_STOP = 'GET_COVID_INDONESIA_STOP'

export const baseURL = 'https://coronavirus-19-api.herokuapp.com/'
export const baseURLIndonesia = 'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'