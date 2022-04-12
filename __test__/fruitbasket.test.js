const { expect } = require('@jest/globals');
const utils = require('../utils.js');

describe('buildFruitBasketObject', () => {
    test('should return object with id, total_fruits, total_weight and fruit_counts', () => {
        const fruitBasketObj = utils.buildFruitBasketObject([{
            "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
            "max_weight": 8,
            "contents": [{
                "type": "apple",
                "color": "green",
                "weight": 1.5
            }, {
                "type": "apple",
                "color": "red",
                "weight": 1
            }, {
                "type": "pear",
                "color": "green",
                "weight": 2.5
            }]
        }]);
        expect(fruitBasketObj).toEqual([
            {
                "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
                "total_fruits": 3,
                "total_weight": 5,
                "fruit_counts": [
                    {
                        "type": "apple",
                        "count": 2
                    },
                    {
                        "type": "pear",
                        "count": 1
                    }
                ]
            }
        ]);
    });
});