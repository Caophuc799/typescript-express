import express from 'express';

const app = express();
const port = 3000;

const sum = (a: number, b: number): number => {
  return a + b;
}
app.get('/', (req, res) => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  res.send(`Sum of ${a} and ${b}: ${sum(a, b)}`);
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});