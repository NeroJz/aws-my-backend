import Express, { Response, Request } from 'express';
require('express-async-errors');
import { json } from 'body-parser';
import cors from 'cors';

const PORT_NUMBER = 3000;

const app = Express();
app.use(json());
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  console.log(`Receive request in /health endpoint`);
  res.status(200).send({
    msg: 'App is healthy'
  });
});

app.get('/info', (req: Request, res: Response) => {
  console.log(`Receive request in /info endpoint`);
  res.send({
    data: 'Info return from backend'
  });
});


app.listen(3000, () => {
  console.log(`Backend listen on port: ${PORT_NUMBER}`);
});
