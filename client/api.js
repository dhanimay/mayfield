import axios from 'axios'


export default async function api(url, method = 'get', data) {
  let options = {
    url: `${window.env.api}${url}`,
    method
  }
  if (data) options.data = data

  let result = await axios(options)
  return result.data
}