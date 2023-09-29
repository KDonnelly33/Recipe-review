// initialize sequelize model
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
// create Recipe model
class Recipe extends Model {}
// initialize Recipe model
Recipe.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false
        },
        ingredients:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        instructions:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        date_created:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW
        },
        image_url:{
            type: DataTypes.STRING,
            allowNull:false
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        },
        mealtype_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'mealtype',
                key:'id'
            }
        },

    },

    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'recipe'
    }
);

module.exports = Recipe;