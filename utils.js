const Fruit = require("./fruit.js");
const FruitBasket = require("./fruitBasket.js");

const buildFruitBasketObject = (input) => {
    let fruitBasket = new FruitBasket(input[0].id);

    input[0].contents.forEach((fruit) => {
        fruitBasket.addFruitToBasket(
            new Fruit(fruit.type, fruit.color, fruit.weight)
        );
    });

    let output = [
        {
            id: fruitBasket.baskedId,
            total_fruits: fruitBasket.getTotalFruits(),
            total_weight: fruitBasket.getWeightOfBasket(),
            fruit_counts: fruitBasket.getFruitTypeAndTotals(),
        },
    ];

    return output;
}

exports.buildFruitBasketObject = buildFruitBasketObject;