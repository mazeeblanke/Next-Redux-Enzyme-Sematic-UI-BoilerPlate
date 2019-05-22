const express = require('express');
const next = require('next');
const server = express();
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: dev
})
const handler = app.getRequestHandler();


app.prepare()
   .then(() => {

    server.get('/', (req, res) => {
      return app.render(req, res, '/home', {});;
    })

    server.get('*', (req, res) => {
      return handler(req, res);
    })

    server.listen(PORT, _ => console.log(`> server running on port ${PORT}`))
   })
   .catch((err) => {
    console.log(err);
    process.exit(1);
   })