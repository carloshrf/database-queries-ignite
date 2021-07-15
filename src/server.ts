import express from 'express'

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'It is working!' });
});

app.listen(3333, () => console.log('Server started'));