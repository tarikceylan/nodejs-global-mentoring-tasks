import express from 'express';
import { Express } from 'express';
import { router } from './api/routes/user.route';
import connectDB from './utils/connectDB';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', router);

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on PORT: 3000`);
});
