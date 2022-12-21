import express from 'express';
import {Express} from 'express';
import {mockData} from './data/mockData'



const app: Express = express();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on PORT: 3000`)
    console.log(mockData)
});