class FruitBasket {
    constructor(id) {
        this._id = id;
        this._fruit = [];
    }

    get baskedId() {
        return this._id;
    }

    getTotalFruits() {
        return this._fruit.length;
    }

    getFruitTypeAndTotals() {
        let fruitType = [];
        let fruitsWithTypeAndTotal = [];
        this._fruit.forEach((fruit) => {
            if (!fruitType.includes(fruit.type)) {
                let fruitArr = this._fruit.filter(item => {
                    return item.type === fruit.type;
                })
                fruitType.push(fruit.type);
                fruitsWithTypeAndTotal.push({ type: fruit.type, count: fruitArr.length });
            }
        });
        return fruitsWithTypeAndTotal;
    }

    getWeightOfBasket() {
        return this._fruit.reduce((acc, fruit) => acc + fruit.weight, 0);
    }

    addFruitToBasket(fruit) {
        this._fruit.push(fruit);
    }
}

module.exports = FruitBasket;