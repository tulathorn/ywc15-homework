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
    personInContent: async () => {
      const data = await request()
      const filteredData = data.filter(person => person.major === 'content')
      return filteredData
    },
    personInMarketing: async () => {
      const data = await request()
      const filteredData = data.filter(person => person.major === 'marketing')
      return filteredData
    },
    personInDesign: async () => {
      const data = await request()
      const filteredData = data.filter(person => person.major === 'design')
      return filteredData
    },
    personInProgramming: async () => {
      const data = await request()
      const filteredData = data.filter(person => person.major === 'programming')
      return filteredData
    },
  }
}