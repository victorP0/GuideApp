require('dotenv').config()


export default {
    //API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
    //API_ENDPOINT: `http://127.0.0.1:9090/guides`,
    API_ENDPOINT: `https://whispering-taiga-96894.herokuapp.com/guides`,
    API_KEY: process.env.REACT_APP_API_KEY || `b7ff46d2-36ab-4318-bef8-6a76412ce160`
  }
