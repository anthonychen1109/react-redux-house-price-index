import axios from 'axios';
import moment from 'moment';

let now = moment()
let year = moment().year()
let month = moment().month() + 1
let day = moment().date()
let time = `${year}-${month}-${day}`

const API_KEY = 'j3MJY3B6UFgGioEWnPkd';

const BASE_URL = 'https://www.quandl.com/api/v3/datasets/'

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SIX_MO = 'FETCH_SIX_MO';
export const FETCH_ONE_YEAR = 'FETCH_ONE_YEAR';
export const FETCH_THREE_YEAR = 'FETCH_THREE_YEAR';
export const FETCH_FIVE_YEAR = 'FETCH_FIVE_YEAR';
export const FETCH_MAX = 'FETCH_MAX';

export function fetchData(nameOfState) {
  const url = `${BASE_URL}/FMAC/HPI_${nameOfState}.json?api_key=${API_KEY}`

  const request = axios.get(url)
  // console.log(request)

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