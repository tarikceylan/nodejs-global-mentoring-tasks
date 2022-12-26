import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite:memory');

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to DB`);
  } catch (err) {
    console.log('Unable to connect');
  }
};
