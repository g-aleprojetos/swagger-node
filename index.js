const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

http.createServer(app).listen(3000)
console.log("Listening at:  http://localhost:port:%s/doc/", 3000)
//http://localhost:3000/doc/

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints')(app)