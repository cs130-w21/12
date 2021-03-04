/* eslint-disable max-len */
// /* eslint-disable max-len */
// /* eslint-disable no-undef */
// /* eslint-disable camelcase */

// 'use strict';

// const api = require('../../src/gateway/recipe-gateway');

// const valid_recipe = {
//   number: 10,
//   offset: 0,
//   results: [{
//     id: 635675, image: 'https://spoonacular.com/recipeImages/635675-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 22, title: 'Boozy Bbq Chicken', usedIngredientCount: 2,
//   }, {
//     id: 665261, image: 'https://spoonacular.com/recipeImages/665261-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 14, title: 'Whole Chicken Dinner', usedIngredientCount: 2,
//   }, {
//     id: 633524, image: 'https://spoonacular.com/recipeImages/633524-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 12, title: 'Baked Chicken In Roasting Bag', usedIngredientCount: 2,
//   }, {
//     id: 641072, image: 'https://spoonacular.com/recipeImages/641072-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 12, title: 'Curried Chickpeas and Vegetables', usedIngredientCount: 2,
//   }, {
//     id: 634618, image: 'https://spoonacular.com/recipeImages/634618-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 12, title: 'Beef Green Chile Stew', usedIngredientCount: 2,
//   }, {
//     id: 634753, image: 'https://spoonacular.com/recipeImages/634753-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 14, title: 'Beer Can Chicken, Country Style Vegetables with Roasted Garlic', usedIngredientCount: 2,
//   }, {
//     id: 660286, image: 'https://spoonacular.com/recipeImages/660286-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 17, title: 'Slow Cooker Chicken Verde Enchilada', usedIngredientCount: 2,
//   }, {
//     id: 660133, image: 'https://spoonacular.com/recipeImages/660133-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 7, title: 'Simple Roast Chicken', usedIngredientCount: 2,
//   }, {
//     id: 637942, image: 'https://spoonacular.com/recipeImages/637942-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 15, title: 'Chicken Arrozcaldo', usedIngredientCount: 2,
//   }, {
//     id: 652602, image: 'https://spoonacular.com/recipeImages/652602-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 10, title: 'Murgh Tandoori', usedIngredientCount: 2,
//   }],
//   totalResults: 19,
// };
// const chicken_chinese_recipe = {
//   number: 10,
//   offset: 0,
//   results: [{
//     id: 636411, image: 'https://spoonacular.com/recipeImages/636411-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 4, title: 'Buffalo Chicken Wings Wonton Wraps', usedIngredientCount: 1,
//   }],
//   totalResults: 1,
// };
// const empty_recipe = {
//   number: 10, offset: 0, results: [], totalResults: 0,
// };
// const vegan_recipe = {
//   number: 10,
//   offset: 0,
//   results: [{
//     id: 661122, image: 'https://spoonacular.com/recipeImages/661122-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 16, title: 'Spicy lentil and black rice soup with kale, spinach and leek', usedIngredientCount: 2,
//   }, {
//     id: 649946, image: 'https://spoonacular.com/recipeImages/649946-312x231.jpg', imageType: 'jpg', likes: 0, missedIngredientCount: 10, title: 'Lentil, Sweet Potato and Spinach Soup', usedIngredientCount: 2,
//   }],
//   totalResults: 2,
// };
// const recipe_info1 = {
//   aggregateLikes: 6,
//   analyzedInstructions: [{
//     name: '',
//     steps: [{
//       equipment: [{
//         id: 404645, image: 'pan.png', localizedName: 'frying pan', name: 'frying pan',
//       }],
//       ingredients: [{
//         id: 9277, image: 'plantains.jpg', localizedName: 'plantain', name: 'plantain',
//       }, {
//         id: 9037, image: 'avocado.jpg', localizedName: 'avocado', name: 'avocado',
//       }, {
//         id: 1001, image: 'butter-sliced.jpg', localizedName: 'butter', name: 'butter',
//       }, {
//         id: 11215, image: 'garlic.png', localizedName: 'garlic', name: 'garlic',
//       }, {
//         id: 1002030, image: 'pepper.jpg', localizedName: 'pepper', name: 'pepper',
//       }, {
//         id: 11282, image: 'brown-onion.png', localizedName: 'onion', name: 'onion',
//       }, {
//         id: 2047, image: 'salt.jpg', localizedName: 'salt', name: 'salt',
//       }, {
//         id: 4582, image: 'vegetable-oil.jpg', localizedName: 'cooking oil', name: 'cooking oil',
//       }],
//       number: 1,
//       step: 'Peel and Slice your plantain into thin stripes and set aside.In a pan, pour in your butter and oil and heat slowly.Toss in your plantain and allow to brown on all sides.Mash your avocado, season with salt and stir in your chopped pepper, garlic and onion.',
//     }, {
//       equipment: [], ingredients: [], number: 2, step: 'Serve as a starter.',
//     }],
//   }],
//   cheap: false,
//   creditsText: 'Afrolems',
//   cuisines: ['American'],
//   dairyFree: false,
//   diets: ['gluten free', 'lacto ovo vegetarian'],
//   dishTypes: ['side dish'],
//   extendedIngredients: [{
//     aisle: 'Produce', amount: 1, consistency: 'solid', id: 9037, image: 'avocado.jpg', measures: { metric: { amount: 1, unitLong: '', unitShort: '' }, us: { amount: 1, unitLong: '', unitShort: '' } }, meta: [], metaInformation: [], name: 'avocado', nameClean: 'hass avocado', original: '1 Avocado', originalName: 'Avocado', originalString: '1 Avocado', unit: '',
//   }, {
//     aisle: 'Milk, Eggs, Other Dairy', amount: 0.5, consistency: 'solid', id: 1001, image: 'butter-sliced.jpg', measures: { metric: { amount: 118.294, unitLong: 'milliliters', unitShort: 'ml' }, us: { amount: 0.5, unitLong: 'cups', unitShort: 'cups' } }, meta: ['melted'], metaInformation: ['melted'], name: 'butter', nameClean: 'butter', original: '1/2 cup of melted butter', originalName: 'melted butter', originalString: '1/2 cup of melted butter', unit: 'cup',
//   }, {
//     aisle: 'Produce', amount: 1, consistency: 'solid', id: 11819, image: 'red-chili.jpg', measures: { metric: { amount: 1, unitLong: 'handful', unitShort: 'handful' }, us: { amount: 1, unitLong: 'handful', unitShort: 'handful' } }, meta: ['chopped'], metaInformation: ['chopped'], name: 'chili pepper', nameClean: 'chili pepper', original: 'A handful of chopped chili pepper', originalName: 'A of chopped chili pepper', originalString: 'A handful of chopped chili pepper', unit: 'handful',
//   }, {
//     aisle: 'Produce', amount: 1, consistency: 'solid', id: 11215, image: 'garlic.png', measures: { metric: { amount: 1, unitLong: 'clove', unitShort: 'clove' }, us: { amount: 1, unitLong: 'clove', unitShort: 'clove' } }, meta: ['chopped'], metaInformation: ['chopped'], name: 'garlic', nameClean: 'garlic', original: '1 clove of garlic chopped', originalName: 'garlic chopped', originalString: '1 clove of garlic chopped', unit: 'clove',
//   }, {
//     aisle: 'Produce', amount: 3, consistency: 'solid', id: 11282, image: 'brown-onion.png', measures: { metric: { amount: 3, unitLong: 'servings', unitShort: 'servings' }, us: { amount: 3, unitLong: 'servings', unitShort: 'servings' } }, meta: ['chopped'], metaInformation: ['chopped'], name: 'onions', nameClean: 'onion', original: 'chopped Onions to garnish', originalName: 'chopped Onions to garnish', originalString: 'chopped Onions to garnish', unit: 'servings',
//   }, {
//     aisle: 'Produce', amount: 1, consistency: 'solid', id: 9277, image: 'plantains.jpg', measures: { metric: { amount: 1, unitLong: '', unitShort: '' }, us: { amount: 1, unitLong: '', unitShort: '' } }, meta: [], metaInformation: [], name: 'plantain', nameClean: 'plantain', original: '1 plantain', originalName: 'plantain', originalString: '1 plantain', unit: '',
//   }, {
//     aisle: 'Spices and Seasonings', amount: 3, consistency: 'solid', id: 2047, image: 'salt.jpg', measures: { metric: { amount: 3, unitLong: 'servings', unitShort: 'servings' }, us: { amount: 3, unitLong: 'servings', unitShort: 'servings' } }, meta: [], metaInformation: [], name: 'salt', nameClean: 'salt', original: 'salt', originalName: 'salt', originalString: 'salt', unit: 'servings',
//   }, {
//     aisle: 'Oil, Vinegar, Salad Dressing', amount: 2, consistency: 'liquid', id: 4513, image: 'vegetable-oil.jpg', measures: { metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' }, us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' } }, meta: [], metaInformation: [], name: 'vegetable oil', nameClean: 'vegetable oil', original: '2 tablespoons of vegetable oil', originalName: 'vegetable oil', originalString: '2 tablespoons of vegetable oil', unit: 'tablespoons',
//   }],
//   gaps: 'no',
//   glutenFree: true,
//   healthScore: 4,
//   id: 800754,
//   image: 'https://spoonacular.com/recipeImages/800754-556x370.jpg',
//   imageType: 'jpg',
//   instructions: '<p>Peel and Slice your plantain into thin stripes and set aside.In a pan, pour in your butter and oil and heat slowly.Toss in your plantain and allow to brown on all sides.Mash your avocado, season with salt and stir in your chopped pepper, garlic and onion.Serve as a starter.</p>',
//   license: 'CC BY 4.0',
//   lowFodmap: false,
//   occasions: [],
//   originalId: null,
//   pricePerServing: 117.5,
//   readyInMinutes: 45,
//   servings: 3,
//   sourceName: 'Afrolems',
//   sourceUrl: 'http://www.afrolems.com/2016/08/30/buttered-plantain-fries-seasoned-avocado-afrolems/',
//   spoonacularScore: 35,
//   spoonacularSourceUrl: 'https://spoonacular.com/buttered-plantain-fries-and-seasoned-avocado-800754',
//   summary: 'Buttered Plantain Fries and Seasoned Avocado might be just the <b>American</b> recipe you are searching for. For <b>$1.18 per serving</b>, you get a side dish that serves 3. Watching your figure? This gluten free and vegetarian recipe has <b>555 calories</b>, <b>3g of protein</b>, and <b>50g of fat</b> per serving. 6 people have made this recipe and would make it again. A mixture of salt, butter, vegetable oil, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 37%</b>. This score is not so outstanding. Try <a href="https://spoonacular.com/recipes/seasoned-fries-402743">Seasoned Fries</a>, <a href="https://spoonacular.com/recipes/seasoned-potato-fries-115792">Seasoned Potato Fries</a>, and <a href="https://spoonacular.com/recipes/seasoned-grilled-fries-290590">Seasoned Grilled Fries</a> for similar recipes.',
//   sustainable: false,
//   title: 'Buttered Plantain Fries and Seasoned Avocado',
//   vegan: false,
//   vegetarian: true,
//   veryHealthy: false,
//   veryPopular: false,
//   weightWatcherSmartPoints: 22,
//   winePairing: { pairedWines: [], pairingText: '', productMatches: [] },
// };

// // testing the findRecipes function

// // testing with valid recipe
// test('The test results in a valid recipe', () => api.findRecipes(['chicken', 'garlic'], '', '').then((data) => {
//   expect(data).toStrictEqual(valid_recipe);
// }));

// // testing chicken with chinese
// test('The test results in a valid recipe', () => api.findRecipes(['chicken'], 'Chinese', '').then((data) => {
//   expect(data).toStrictEqual(chicken_chinese_recipe);
// }));

// // testing what will give zero found ingredients
// test('The test results yeild no recipes', () => api.findRecipes(['pork', 'spinach'], 'Chinese', '').then((data) => {
//   expect(data).toStrictEqual(empty_recipe);
// }));

// // testing with all three parameters
// test('Valid Recipes are reproduced', () => api.findRecipes(['spinach', 'carrot'], '', 'vegan').then((data) => {
//   expect(data).toStrictEqual(vegan_recipe);
// }));

// // testing the getRecipeInformation function

// // testing with a valid id 800754

// test('Valid Recipes are reproduced', () => api.getRecipeInformation(800754).then((data) => {
//   expect(data).toStrictEqual(recipe_info1);
// }));

// // testing with non-valid id

// test('the fetch fails with an error', async () => {
//   try {
//     await api.getRecipeInformation(7777777);
//   } catch (e) {
// eslint-disable-next-line max-len
//     expect(e.toString()).toStrictEqual('Error: Recipe API GET error: Error in getting detailed recipe information');
//   }
// });

// // testing getRandomRecipe

// test('Valid Recipes are reproduced', () => api.getRandomRecipe().then((data) => {
//   expect(data).toStrictEqual(expect.anything());
// }));
