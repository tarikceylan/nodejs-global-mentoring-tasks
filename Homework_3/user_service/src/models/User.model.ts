import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('api', 'postgres', '11290114', {
  host: 'localhost',
  dialect: 'postgres'
});

export const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: false
  }
);
