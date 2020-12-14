import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer eNI2vhM8v9U9RNIqk7TLGrV8ZKcq8ozaq4H3RarzQ3B_bBxsgVve9Pxa2L3g8hc9ncdErNPUAl96YkM27wYGsb7A1LkpbBunTOh38_Jx0wh8T6EjCIS02tDS3HzVX3Yx'
  }
})

