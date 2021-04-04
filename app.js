const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e18066b0036fd38f8007781c592bd92c&query=31.2232,75.7670&units=f'

request({url: url, json: true}, (err, res)=>{
	console.log(`${res.body.current.weather_descriptions[0]}. it is ${res.body.current.temperature} degree out there and feels like ${res.body.current.feelslike} degree`)
})
