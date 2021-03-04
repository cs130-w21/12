/* eslint-disable max-len */
/* eslint-disable no-undef */

'use strict';

const recipeGateway = require('../../src/gateway/recipe-gateway.js');
const recipeService = require('../../src/service/recipe-service.js');
const recipeQuery = require('../../src/postgres/recipe-query.js');

describe('Test search recipes by ingredients', () => {
  it('Should succeed', async () => {
    recipeGateway.findRecipes = jest.fn(() => ({
      results: [{
        id: 640136,
        title: 'Corned Beef And Cabbage With Irish Mustard Sauce',
        image: 'https://spoonacular.com/recipeImages/640136-556x370.jpg',
      }],
    }));
    recipeQuery.ensureRecipe = jest.fn(() => Promise.resolve());

    await recipeService.findRecipes([], '', '');
    expect(recipeGateway.findRecipes).toBeCalledTimes(1);
    expect(recipeQuery.ensureRecipe).toBeCalledTimes(1);
  });
});

describe('Test get recipe detailed information', () => {
  it('Should succeed', async () => {
    recipeGateway.getRecipeInformation = jest.fn(() => ({
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: true,
      cheap: false,
      veryPopular: true,
      sustainable: false,
      weightWatcherSmartPoints: 4,
      gaps: 'no',
      lowFodmap: false,
      aggregateLikes: 3689,
      spoonacularScore: 99.0,
      healthScore: 76.0,
      creditsText: 'Full Belly Sisters',
      license: 'CC BY-SA 3.0',
      sourceName: 'Full Belly Sisters',
      pricePerServing: 112.39,
      extendedIngredients: [
        {
          id: 11090,
          aisle: 'Produce',
          image: 'broccoli.jpg',
          consistency: 'solid',
          name: 'broccoli',
          nameClean: 'broccoli',
          original: '2 cups cooked broccoli, chopped small',
          originalString: '2 cups cooked broccoli, chopped small',
          originalName: 'cooked broccoli, chopped small',
          amount: 2.0,
          unit: 'cups',
          meta: [
            'cooked',
            'chopped',
          ],
          metaInformation: [
            'cooked',
            'chopped',
          ],
          measures: {
            us: {
              amount: 2.0,
              unitShort: 'cups',
              unitLong: 'cups',
            },
            metric: {
              amount: 473.176,
              unitShort: 'ml',
              unitLong: 'milliliters',
            },
          },
        },
        {
          id: 11135,
          aisle: 'Produce',
          image: 'cauliflower.jpg',
          consistency: 'solid',
          name: 'cauliflower',
          nameClean: 'cauliflower',
          original: '1 head of cauliflower, raw',
          originalString: '1 head of cauliflower, raw',
          originalName: 'cauliflower, raw',
          amount: 1.0,
          unit: 'head',
          meta: [
            'raw',
          ],
          metaInformation: [
            'raw',
          ],
          measures: {
            us: {
              amount: 1.0,
              unitShort: 'head',
              unitLong: 'head',
            },
            metric: {
              amount: 1.0,
              unitShort: 'head',
              unitLong: 'head',
            },
          },
        },
        {
          id: 4047,
          aisle: 'Health Foods;Baking',
          image: 'oil-coconut.jpg',
          consistency: 'liquid',
          name: 'coconut oil',
          nameClean: 'coconut oil',
          original: '1 + 1 T coconut oil or butter',
          originalString: '1 + 1 T coconut oil or butter',
          originalName: '1 T coconut oil or butter',
          amount: 1.0,
          unit: '',
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: '',
              unitLong: '',
            },
            metric: {
              amount: 1.0,
              unitShort: '',
              unitLong: '',
            },
          },
        },
        {
          id: 20041,
          aisle: 'Pasta and Rice',
          image: 'rice-brown-cooked.png',
          consistency: 'solid',
          name: 'cooked brown rice',
          nameClean: 'cooked brown rice',
          original: '3 cups of cooked brown rice, cold',
          originalString: '3 cups of cooked brown rice, cold',
          originalName: 'cooked brown rice, cold',
          amount: 3.0,
          unit: 'cups',
          meta: [
            'cold',
            'cooked',
          ],
          metaInformation: [
            'cold',
            'cooked',
          ],
          measures: {
            us: {
              amount: 3.0,
              unitShort: 'cups',
              unitLong: 'cups',
            },
            metric: {
              amount: 709.764,
              unitShort: 'ml',
              unitLong: 'milliliters',
            },
          },
        },
        {
          id: 11215,
          aisle: 'Produce',
          image: 'garlic.png',
          consistency: 'solid',
          name: 'garlic',
          nameClean: 'garlic',
          original: '5 cloves of garlic, chopped',
          originalString: '5 cloves of garlic, chopped',
          originalName: 'garlic, chopped',
          amount: 5.0,
          unit: 'cloves',
          meta: [
            'chopped',
          ],
          metaInformation: [
            'chopped',
          ],
          measures: {
            us: {
              amount: 5.0,
              unitShort: 'cloves',
              unitLong: 'cloves',
            },
            metric: {
              amount: 5.0,
              unitShort: 'cloves',
              unitLong: 'cloves',
            },
          },
        },
        {
          id: 4517,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'vegetable-oil.jpg',
          consistency: 'liquid',
          name: 'grapeseed oil',
          nameClean: 'grape seed oil',
          original: '1 + 1 T grapeseed oil',
          originalString: '1 + 1 T grapeseed oil',
          originalName: '1 T grapeseed oil',
          amount: 1.0,
          unit: '',
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: '',
              unitLong: '',
            },
            metric: {
              amount: 1.0,
              unitShort: '',
              unitLong: '',
            },
          },
        },
        {
          id: 16424,
          aisle: 'Ethnic Foods;Condiments',
          image: 'soy-sauce.jpg',
          consistency: 'liquid',
          name: 'low sodium soy sauce',
          nameClean: 'lower sodium soy sauce',
          original: '3T reduced-sodium soy sauce',
          originalString: '3T reduced-sodium soy sauce',
          originalName: 'reduced-sodium soy sauce',
          amount: 3.0,
          unit: 'T',
          meta: [
            'reduced-sodium',
          ],
          metaInformation: [
            'reduced-sodium',
          ],
          measures: {
            us: {
              amount: 3.0,
              unitShort: 'Tbsps',
              unitLong: 'Tbsps',
            },
            metric: {
              amount: 3.0,
              unitShort: 'Tbsps',
              unitLong: 'Tbsps',
            },
          },
        },
        {
          id: 11304,
          aisle: 'Produce',
          image: 'peas.jpg',
          consistency: 'solid',
          name: 'peas',
          nameClean: 'green peas',
          original: '1 cup frozen peas',
          originalString: '1 cup frozen peas',
          originalName: 'frozen peas',
          amount: 1.0,
          unit: 'cup',
          meta: [
            'frozen',
          ],
          metaInformation: [
            'frozen',
          ],
          measures: {
            us: {
              amount: 1.0,
              unitShort: 'cup',
              unitLong: 'cup',
            },
            metric: {
              amount: 236.588,
              unitShort: 'ml',
              unitLong: 'milliliters',
            },
          },
        },
        {
          id: 2047,
          aisle: 'Spices and Seasonings',
          image: 'salt.jpg',
          consistency: 'solid',
          name: 'salt',
          nameClean: 'salt',
          original: 'salt, to taste',
          originalString: 'salt, to taste',
          originalName: 'salt, to taste',
          amount: 8.0,
          unit: 'servings',
          meta: [
            'to taste',
          ],
          metaInformation: [
            'to taste',
          ],
          measures: {
            us: {
              amount: 8.0,
              unitShort: 'servings',
              unitLong: 'servings',
            },
            metric: {
              amount: 8.0,
              unitShort: 'servings',
              unitLong: 'servings',
            },
          },
        },
        {
          id: 11291,
          aisle: 'Produce',
          image: 'spring-onions.jpg',
          consistency: 'solid',
          name: 'scallion',
          nameClean: 'spring onions',
          original: 'additional chopped scallion tops for garnish',
          originalString: 'additional chopped scallion tops for garnish',
          originalName: 'additional chopped scallion tops for garnish',
          amount: 8.0,
          unit: 'servings',
          meta: [
            'chopped',
            'for garnish',
          ],
          metaInformation: [
            'chopped',
            'for garnish',
          ],
          measures: {
            us: {
              amount: 8.0,
              unitShort: 'servings',
              unitLong: 'servings',
            },
            metric: {
              amount: 8.0,
              unitShort: 'servings',
              unitLong: 'servings',
            },
          },
        },
        {
          id: 11291,
          aisle: 'Produce',
          image: 'spring-onions.jpg',
          consistency: 'solid',
          name: 'scallions',
          nameClean: 'spring onions',
          original: '7 scallions, chopped (keep white/light green ends separate from dark green tops)',
          originalString: '7 scallions, chopped (keep white/light green ends separate from dark green tops)',
          originalName: 'scallions, chopped (keep white/light green ends separate from dark green tops)',
          amount: 7.0,
          unit: '',
          meta: [
            'dark',
            'green',
            'chopped',
            '(keep white/light ends separate from tops)',
          ],
          metaInformation: [
            'dark',
            'green',
            'chopped',
            '(keep white/light ends separate from tops)',
          ],
          measures: {
            us: {
              amount: 7.0,
              unitShort: '',
              unitLong: '',
            },
            metric: {
              amount: 7.0,
              unitShort: '',
              unitLong: '',
            },
          },
        },
        {
          id: 4058,
          aisle: 'Ethnic Foods',
          image: 'sesame-oil.png',
          consistency: 'liquid',
          name: 'sesame oil',
          nameClean: 'sesame oil',
          original: '2t toasted sesame oil',
          originalString: '2t toasted sesame oil',
          originalName: 'toasted sesame oil',
          amount: 2.0,
          unit: 't',
          meta: [
            'toasted',
          ],
          metaInformation: [
            'toasted',
          ],
          measures: {
            us: {
              amount: 2.0,
              unitShort: 'tsps',
              unitLong: 'teaspoons',
            },
            metric: {
              amount: 2.0,
              unitShort: 'tsps',
              unitLong: 'teaspoons',
            },
          },
        },
        {
          id: 12023,
          aisle: 'Ethnic Foods;Spices and Seasonings',
          image: 'sesame-seeds.png',
          consistency: 'solid',
          name: 'sesame seeds',
          nameClean: 'sesame seeds',
          original: 'toasted sesame seeds, optional',
          originalString: 'toasted sesame seeds, optional',
          originalName: 'toasted sesame seeds, optional',
          amount: 8.0,
          unit: 'servings',
          meta: [
            'toasted',
          ],
          metaInformation: [
            'toasted',
          ],
          measures: {
            us: {
              amount: 8.0,
              unitShort: 'servings',
              unitLong: 'servings',
            },
            metric: {
              amount: 8.0,
              unitShort: 'servings',
              unitLong: 'servings',
            },
          },
        },
      ],
      id: 716426,
      title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
      readyInMinutes: 30,
      servings: 8,
      sourceUrl: 'http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html',
      image: 'https://spoonacular.com/recipeImages/716426-556x370.jpg',
      imageType: 'jpg',
      summary: 'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
      cuisines: [
        'Chinese',
        'Asian',
      ],
      dishTypes: [
        'side dish',
      ],
      diets: [
        'gluten free',
        'dairy free',
        'lacto ovo vegetarian',
        'vegan',
      ],
      occasions: [],
      winePairing: {},
      instructions: "<ol><li><span></span>Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"</li><li>Heat 1T butter and 1T oil in a large skillet over medium heat. Add garlic and the white and light green pieces of scallion. Sauté about a minute.</li><li>Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.</li><li>Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. Let it sit for about two minutes—so the rice can get toasted and a little crispy. Add the peas and broccoli and stir again. Drizzle soy sauce and toasted sesame oil over rice.</li><li>Cook for another minute or so and turn off heat. Add chopped scallion tops and toss.</li><li>I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.</li><li>Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.</li></ol>",
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
              ingredients: [
                {
                  id: 10011135,
                  name: 'cauliflower florets',
                  localizedName: 'cauliflower florets',
                  image: 'cauliflower.jpg',
                },
                {
                  id: 10111135,
                  name: 'cauliflower rice',
                  localizedName: 'cauliflower rice',
                  image: 'cauliflower.jpg',
                },
                {
                  id: 11135,
                  name: 'cauliflower',
                  localizedName: 'cauliflower',
                  image: 'cauliflower.jpg',
                },
                {
                  id: 20028,
                  name: 'couscous',
                  localizedName: 'couscous',
                  image: 'couscous-cooked.jpg',
                },
                {
                  id: 20444,
                  name: 'rice',
                  localizedName: 'rice',
                  image: 'uncooked-white-rice.png',
                },
              ],
              equipment: [
                {
                  id: 404771,
                  name: 'food processor',
                  localizedName: 'food processor',
                  image: 'food-processor.png',
                },
              ],
            },
            {
              number: 2,
              step: 'Heat 1T butter and 1T oil in a large skillet over medium heat.',
              ingredients: [
                {
                  id: 1001,
                  name: 'butter',
                  localizedName: 'butter',
                  image: 'butter-sliced.jpg',
                },
                {
                  id: 4582,
                  name: 'cooking oil',
                  localizedName: 'cooking oil',
                  image: 'vegetable-oil.jpg',
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: 'frying pan',
                  localizedName: 'frying pan',
                  image: 'pan.png',
                },
              ],
            },
            {
              number: 3,
              step: 'Add garlic and the white and light green pieces of scallion. Sauté about a minute.',
              ingredients: [
                {
                  id: 11291,
                  name: 'green onions',
                  localizedName: 'green onions',
                  image: 'spring-onions.jpg',
                },
                {
                  id: 11215,
                  name: 'garlic',
                  localizedName: 'garlic',
                  image: 'garlic.png',
                },
              ],
              equipment: [],
            },
            {
              number: 4,
              step: 'Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.',
              ingredients: [
                {
                  id: 11135,
                  name: 'cauliflower',
                  localizedName: 'cauliflower',
                  image: 'cauliflower.jpg',
                },
                {
                  id: 0,
                  name: 'spread',
                  localizedName: 'spread',
                  image: '',
                },
                {
                  id: 4582,
                  name: 'cooking oil',
                  localizedName: 'cooking oil',
                  image: 'vegetable-oil.jpg',
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: 'frying pan',
                  localizedName: 'frying pan',
                  image: 'pan.png',
                },
              ],
            },
            {
              number: 5,
              step: "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
              ingredients: [
                {
                  id: 4047,
                  name: 'coconut oil',
                  localizedName: 'coconut oil',
                  image: 'oil-coconut.jpg',
                },
                {
                  id: 1001,
                  name: 'butter',
                  localizedName: 'butter',
                  image: 'butter-sliced.jpg',
                },
                {
                  id: 0,
                  name: 'spread',
                  localizedName: 'spread',
                  image: '',
                },
                {
                  id: 20444,
                  name: 'rice',
                  localizedName: 'rice',
                  image: 'uncooked-white-rice.png',
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: 'frying pan',
                  localizedName: 'frying pan',
                  image: 'pan.png',
                },
              ],
            },
            {
              number: 6,
              step: 'Let it sit for about two minutes—so the rice can get toasted and a little crispy.',
              ingredients: [
                {
                  id: 20444,
                  name: 'rice',
                  localizedName: 'rice',
                  image: 'uncooked-white-rice.png',
                },
              ],
              equipment: [],
              length: {
                number: 2,
                unit: 'minutes',
              },
            },
            {
              number: 7,
              step: 'Add the peas and broccoli and stir again.',
              ingredients: [
                {
                  id: 11090,
                  name: 'broccoli',
                  localizedName: 'broccoli',
                  image: 'broccoli.jpg',
                },
                {
                  id: 11304,
                  name: 'peas',
                  localizedName: 'peas',
                  image: 'peas.jpg',
                },
              ],
              equipment: [],
            },
            {
              number: 8,
              step: 'Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.',
              ingredients: [
                {
                  id: 4058,
                  name: 'sesame oil',
                  localizedName: 'sesame oil',
                  image: 'sesame-oil.png',
                },
                {
                  id: 16124,
                  name: 'soy sauce',
                  localizedName: 'soy sauce',
                  image: 'soy-sauce.jpg',
                },
                {
                  id: 20444,
                  name: 'rice',
                  localizedName: 'rice',
                  image: 'uncooked-white-rice.png',
                },
              ],
              equipment: [],
            },
            {
              number: 9,
              step: "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
              ingredients: [
                {
                  id: 12023,
                  name: 'sesame seeds',
                  localizedName: 'sesame seeds',
                  image: 'sesame-seeds.png',
                },
                {
                  id: 16124,
                  name: 'soy sauce',
                  localizedName: 'soy sauce',
                  image: 'soy-sauce.jpg',
                },
                {
                  id: 11291,
                  name: 'green onions',
                  localizedName: 'green onions',
                  image: 'spring-onions.jpg',
                },
                {
                  id: 5006,
                  name: 'whole chicken',
                  localizedName: 'whole chicken',
                  image: 'whole-chicken.jpg',
                },
                {
                  id: 18070,
                  name: 'toast',
                  localizedName: 'toast',
                  image: 'toast',
                },
                {
                  id: 20444,
                  name: 'rice',
                  localizedName: 'rice',
                  image: 'uncooked-white-rice.png',
                },
                {
                  id: 2047,
                  name: 'salt',
                  localizedName: 'salt',
                  image: 'salt.jpg',
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: 'frying pan',
                  localizedName: 'frying pan',
                  image: 'pan.png',
                },
              ],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426',
    }));

    await recipeService.getRecipeInfo(716426);
    expect(recipeGateway.getRecipeInformation).toBeCalledTimes(1);
  });
});

describe('Test get random recipe', () => {
  it('Should succeed', async () => {
    recipeGateway.getRandomRecipe = jest.fn(() => ({
      recipes: [{
        id: 640136,
        title: 'Corned Beef And Cabbage With Irish Mustard Sauce',
        image: 'https://spoonacular.com/recipeImages/640136-556x370.jpg',
      }],
    }));

    await recipeService.getRandomRecipe();
    expect(recipeGateway.getRandomRecipe).toBeCalledTimes(1);
  });
});
