// import sequelize model, datatypes, and connection
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
// create Comment model
class Comment extends Model {}
// initialize Comment model
Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        comment:{
            type: DataTypes.STRING,
            allowNull:false
        },
        date_created:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        },
        recipe_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'recipe',
                key:'id'
            }
        },

    },

    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'comment'
    }
);

module.exports = Comment;