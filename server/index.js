const app = require('./server');

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`listening on port ${server.address().port}`);
});
