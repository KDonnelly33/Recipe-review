// import sequelize model, datatypes, and connection
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
// create Mealtype model
class Mealtype extends Model {}
// initialize Mealtype model
Mealtype.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        mealtype_name:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },

    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'mealtype'
    }
);

module.exports = Mealtype;
