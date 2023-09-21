const sequelize = require('../config/connection');
const { User, Recipe, Mealtype } = require('../models');

const userData = require('./userData.json');
const mealtypeData = require('./mealtypeData.json');
const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
    await sequelize.sync({
        force: true
    });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Mealtype.bulkCreate(mealtypeData);

    for (const recipe of recipeData) {
        await Recipe.create({
            ...recipe,
        });
    }

    process.exit(0);
};

seedDatabase();
