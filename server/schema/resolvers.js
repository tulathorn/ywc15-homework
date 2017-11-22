const fetch = require('isomorphic-fetch')

// For sent the request to fetch data from provided api
const request = () => {
  return fetch(`https://ywc15.ywc.in.th/api/interview/`)
    .then((respone) => {
      if (respone.status >= 400){
        throw new Error("Bad response from server");
      }
      return respone.json()
    })
}

module.exports = {
  Query: {
    persons: async () => {
      return await request()
    },
    personByMajor: async (_, data) => {
      const rawData = await request()
      const search = data.major
      console.log(search)
      const major = await Object.key(rawData.search)
      return major.json()
    }
  }
}