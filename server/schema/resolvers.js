const fetch = require('isomorphic-fetch')

// For sent the request to fetch data from provided api
const request = () => {
  return fetch(`https://ywc15.ywc.in.th/api/interview/`)
    .then((respone) => {
      if (respone.status >= 400) {
        throw new Error("Bad response from server");
      }
      return respone.json()
    })
}

module.exports = {
  Query: {
    persons: async(_, data) => {
      const req = await request()
      const filteredData = req
        .filter(person => person.major === data.major)
        .filter(person => person.firstName.indexOf(data.firstName) !== -1)
      return filteredData
    }
  }
}