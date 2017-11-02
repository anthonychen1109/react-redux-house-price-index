import axios from 'axios';
import moment from 'moment';

let now = moment()

const API_KEY = 'j3MJY3B6UFgGioEWnPkd';

const BASE_URL = 'https://www.quandl.com/api/v3/datasets/'

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SIX_MO = 'FETCH_SIX_MO';
export const FETCH_ONE_YR = 'FETCH_ONE_YR';
export const FETCH_FIVE_YR = 'FETCH_FIVE_YR';

export function fetchData(nameOfState) {
  const url = `${BASE_URL}/FMAC/HPI_${nameOfState}.json?api_key=${API_KEY}`

  const request = axios.get(url)

  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function fetchSixMo(nameOfState) {
  let month = now.subtract(6, 'months').format('YYYY-MM-DD')
  const url = `${BASE_URL}FMAC/HPI_${nameOfState}.json?api_key=${API_KEY}&start_date=${month}`
  const request = axios.get(url)

  return {
    type: FETCH_SIX_MO,
    payload: request
  }
}

export function fetchOneYr(nameOfState) {
  let year = now.subtract(1, 'years').format('YYYY-MM-DD')
  const url = `${BASE_URL}FMAC/HPI_${nameOfState}.json?api_key=${API_KEY}&start_date=${year}`

  const request = axios.get(url)

  return {
    type: FETCH_ONE_YR,
    payload: request
  }
}

export function fetchFiveYr(nameOfState) {
  let year = now.subtract(5, 'years').format('YYYY-MM-DD')
  const url = `${BASE_URL}FMAC/HPI_${nameOfState}.json?api_key=${API_KEY}&start_date=${year}`

  const request = axios.get(url)

  return {
    type: FETCH_FIVE_YR,
    payload: request
  }
}