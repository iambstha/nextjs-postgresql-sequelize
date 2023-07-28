import { DataTypes } from "sequelize";
import { sequelize } from "@/db/core/config";

const Question = sequelize.define('Question',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ques: {
        type: DataTypes.STRING,
        allowNull: false
    },
    op1 : {
        type: DataTypes.STRING,
        allowNull: false
    },
    op2 : {
        type: DataTypes.STRING,
        allowNull: false
    },
    op3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correct: {
        type: DataTypes.CHAR,
        allowNull: false
    }
})

Question.associate = (models) => {
    Question.belongsTo(models.User);
  };
  
export default Question
