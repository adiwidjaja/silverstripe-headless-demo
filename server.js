require('dotenv').config();
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare()
  .then(() => {
    const server = express();

    // server.use((req, res, nextFunction) => {
    //   nextFunction();
    // });

    // server.use('/static', express.static('static', {
    //   maxAge: 30 * 24 * 3600 * 1000,
    //   immutable: true,
    // }));

    server.use(express.static('_next'));

    server.get('/apply/:id', (req, res) => app.render(req, res, `/apply/${req.params.id}`, req.query));
    server.get('/details/:id', (req, res) => app.render(req, res, `/details/${req.params.id}`, req.query));
    server.get('*', (req, res) => app.render(req, res, '/index', req.query));
    // server.get('*', (req, res) => app.render(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
