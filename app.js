// app.js

const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();

module.exports = app; // for testing

const config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  const port = process.env.PORT || 10010;
  app.listen(port);

  // install middleware
  swaggerExpress.register(app);
});
