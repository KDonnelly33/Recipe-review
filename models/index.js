// import all models
const Comment = require('./Comment');
const Mealtype = require('./Mealtype');
const Recipe = require('./Recipe');
const User = require('./User');
// user has many recipes
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// recipe belongs to user
Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});
// user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// comment belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// recipe has many comments
Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});
// comment belongs to recipe
Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});
// mealtype has many recipes
Mealtype.hasMany(Recipe, {
    foreignKey: 'mealtype_id',
    onDelete: 'CASCADE'
});
// recipe belongs to mealtype
Recipe.belongsTo(Mealtype, {
    foreignKey: 'mealtype_id'
});
// export modules
module.exports = { Comment, Mealtype, Recipe, User };


