class Fruit {
    constructor(type, color, weight) {
        this._type = type;
        this._color = color;
        this._weight = weight;
    }

    get type() {
        return this._type;
    }

    get color() {
        return this._color;
    }

    get weight() {
        return this._weight;
    }
}

module.exports = Fruit;