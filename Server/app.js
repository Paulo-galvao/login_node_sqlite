import express from 'express';
import sequelize from './config/database.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config";
import authVerification from './middlewares/auth.js';

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js SQLite Login System');  
});

app.get('/userarea', authVerification, (req, res) => {
  res.send('Welcome to the User Area');
});

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});