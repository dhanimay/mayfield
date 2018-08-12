import to from 'lib/to.js'
import fetch from 'node-fetch'
import Redis from 'lib/redis'

const robinhoodApi = process.env.ROBINHOOD_API_URL
let robinhoodToken = null;

(async function loginAndGetUser () {
  robinhoodToken =  await Redis.get('robinhood.token')
  if (!robinhoodToken) await exports.loginToRobinhood()

  let user = await Redis.get('robinhood.user')
  if (!user) exports.getUser()
})()

exports.loginToRobinhood = async function () {
  let err, response
  let loginOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: process.env.ROBINHOOD_USERNAME,
      password: process.env.ROBINHOOD_PASSWORD
    })
  };
  [err, response] = await to(fetch(`${robinhoodApi}/api-token-auth/`, loginOptions))
  if (err) console.error('Error ', err)
  let { token } = await response.json()
  Redis.set('robinhood.token', token)
}

exports.getUser = async function () {
  let err, response
  [err, response] = await to(fetch(`${robinhoodApi}/user/`, {
    headers: {
      'Authorization': `Token ${robinhoodToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }))
  if (err) console.error('Error ', err)
  const user = await response.json()
  Redis.set('robinhood.user', JSON.stringify(user))
  return user
}


exports.investments = async function () {
  let positions = await exports.getPositions(true)
  await exports.getPositionInstruments(positions)
  await exports.getPositionQuotes(positions)
  return positions
}

exports.getPositions = async function (currentlyHeld) {
  let err, response
  let requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Token ${robinhoodToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  [err, response] = await to(fetch(`${robinhoodApi}/positions/`, requestOptions))
  if (err) console.error('Error ', err)
  const data = await response.json()
  if (!currentlyHeld) return data.results
  return data.results.filter(position => position.quantity > 0)
}

exports.getPositionInstruments = async function (positions) {
  let requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Token ${robinhoodToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  let positionRequests = positions.map(position => fetch(position.instrument, requestOptions))
  const results = await Promise.all(positionRequests)
  const instruments = await Promise.all(results.map(instrument => instrument.json()))
  for(let i = 0; i < positions.length; i++) {
    positions[i] = Object.assign(positions[i], instruments[i])
  }
}

exports.getPositionQuotes = async function (positions) {
  let requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Token ${robinhoodToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  let positionRequests = positions.map(position => fetch(position.quote, requestOptions))
  const results = await Promise.all(positionRequests)
  const instruments = await Promise.all(results.map(instrument => instrument.json()))
  for(let i = 0; i < positions.length; i++) {
    positions[i] = Object.assign(positions[i], instruments[i])
  }
}