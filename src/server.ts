import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log('Listening on 0.0.0.0:3333')
});
