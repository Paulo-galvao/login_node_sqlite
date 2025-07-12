import express from 'express';
import sequelize from './config/database.js';
import userRouter from './routes/userRoute.js';
import cors from 'cors';
import "dotenv/config";

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});