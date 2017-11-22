const fetch = require('isomorphic-fetch')

// For sent the request to fetch data from provided api
const request = () => {
  return fetch(`https://ywc15.ywc.in.th/api/interview/`)
    .then((respone) => {
      if (respone.status >= 400){
        throw new Error("Bad response from server");
      }
      console.log(respone)
      return respone.json()
    })
}

module.exports = {
  Query: {
    persons: async () => {
      return request()
    },
    personByMajor: async (_, data) => {
      const personData = await request()

    },
  }
}