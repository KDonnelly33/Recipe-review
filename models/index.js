const Comment = require('./Comment');
const Mealtype = require('./Mealtype');
const Recipe = require('./Recipe');
const User = require('./User');

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

Mealtype.hasMany(Recipe, {
    foreignKey: 'mealtype_id',
    onDelete: 'CASCADE'
});

Recipe.belongsTo(Mealtype, {
    foreignKey: 'mealtype_id'
});

module.exports = { Comment, Mealtype, Recipe, User };


