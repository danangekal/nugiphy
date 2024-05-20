export default eventHandler(async (_event) => {
  // const baseUrl = process.env.GIPHY_API_URL || ''
  // const apiKey = process.env.GIPHY_API_KEY || ''
  // const url = `${baseUrl}/trending/searches?api_key=${apiKey}`
  // const result = await $fetch(url)
  const result = {
    data: [
      'fast runner',
      'banging on door',
      'dunkin donuts',
      'ukraine',
      'frank the tank',
      'rams',
      'tyson fury',
      'teeth',
      'date night',
      'haitian',
      'confused dog',
      'dancing pony',
      'furry',
      'warrior',
      'prom',
      'saturdays',
      'box',
      'cousins',
      'wedding',
      'bride',
    ],
    meta: {
      msg: 'OK',
      status: 200,
      response_id: 'f8632aa2286ac3d8f4bccf135408e37706e80165',
    },
  }
  return result
})
