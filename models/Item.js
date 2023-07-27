import { DataTypes } from "sequelize";
import { sequelize } from "@/db/core/config";

const Item = sequelize.define('Item',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Item