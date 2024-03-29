// models/Task.js
import { DataTypes } from 'sequelize';
import { sequelize } from '@/db/core/config';

import Question from './Question';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

User.associate = (models) => {
  User.hasMany(models.Question);
};


export default User;
