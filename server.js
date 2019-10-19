const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')

const app = express();
const port = process.env.PORT || 5000;
const API_KEY = '842b1716f1f96539da89c8f66252c9d7'
const BASE_URL = 'https://api.themoviedb.org/3'

const getRequestURL = (path) => {
  return `${BASE_URL}/${path}?api_key=${API_KEY}&language=en-US`;
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/api/movies/search', async (req, res) => {
  const query = req.query.q
  request.get(`${getRequestURL('search/movie')}&page=1&include_adult=false&query=${query}`, (err, response, body) => {
    res.send(JSON.parse(body).results)
  })
})

app.get('/api/movies/popular', async (req, res) => {
  request.get(`${getRequestURL('movie/popular')}&page=1`, (err, response, body) => {
    res.send(JSON.parse(body).results)
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));