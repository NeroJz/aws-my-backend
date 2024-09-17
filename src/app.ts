import Express, { Response, Request } from 'express';
require('express-async-errors');
import { json } from 'body-parser';

const PORT_NUMBER = 3000;

const app = Express();
app.use(json());

app.get('/info', (req: Request, res: Response) => {
  res.send({
    data: 'Info return from backend'
  });
});


app.listen(3000, () => {
  console.log(`Backend listen on port: ${PORT_NUMBER}`);
});
