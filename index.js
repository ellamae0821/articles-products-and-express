/*jshint esversion:6*/
//ENTRY POINT OF THE APP , then APP.js is tthe actual runtime. We should get thru index.js to run app


const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8080;


http.createServer(app).listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});