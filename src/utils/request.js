import 'whatwg-fetch';
import { URL_METHOD } from './constants'
// import { ACCESS_TOKEN_KEY } from '../constants';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  console.log('loi' + JSON.stringify(response) )
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, body, type) {

  if (URL_METHOD.post === type) {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then(checkStatus)
      .then(parseJSON);
  }
  else if (URL_METHOD.get === type) {
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
      .then(checkStatus)
      .then(parseJSON);
  }
  else if (URL_METHOD.form_data === type) {
    var formData = new FormData();
    formData.append('apikey', '40e81eac-12ef-4f2a-8340-23140872433a');
    formData.append('file', body);
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then(checkStatus)
      .then(parseJSON);
  }

}
