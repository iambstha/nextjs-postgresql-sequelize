import { DataTypes } from 'sequelize';
import { sequelize } from '@/db/core/config';

const Submission = sequelize.define('Submission', {
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
  selectedOptions: {
    type: DataTypes.JSON, // Assuming you want to store the selected options as JSON data
    allowNull: false,
  },
});

export default Submission;
