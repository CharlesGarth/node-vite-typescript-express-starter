import express, { Express, Request, Response }  from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeFullReload", () => {
    server.close();
  });
}