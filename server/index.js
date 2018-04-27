const app = require('./server');

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`listening on port ${server.address().port}`);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});