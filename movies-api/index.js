const express = require('express');

const app = express();

const { config } = require ('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorhandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());
//routes
moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//error midlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
