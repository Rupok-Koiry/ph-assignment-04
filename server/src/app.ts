import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for enabling Cross-Origin Resource Sharing (CORS) for specified origins
app.use(cors());

// Route handlers for API endpoints prefixed with /api/v1
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Middleware for handling global errors
app.use(globalErrorHandler);

// Middleware for handling 404 - Not Found errors
app.use(notFound);

export default app;
