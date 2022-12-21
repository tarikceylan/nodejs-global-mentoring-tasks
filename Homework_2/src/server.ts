import express from 'express';
import {Express} from 'express';
import {mockData} from '../data/mockData';
import {router} from './routes/userRoutes'

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/users', router)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on PORT: 3000`);
});