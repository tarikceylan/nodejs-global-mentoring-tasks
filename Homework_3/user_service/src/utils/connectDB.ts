import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite:memory');

export default async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to DB`);
  } catch (err) {
    console.log('Unable to connect');
  }
};
