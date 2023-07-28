import { DataTypes } from "sequelize";
import { sequelize } from "@/db/core/config";

const Image = sequelize.define('Image',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
  
export default Image
