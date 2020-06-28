"use strict";

const products1 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

function isEmpty(obj) {
    if (obj['photos'] == undefined) {
        return false;
    } else if (obj['photos'].length != 0) {
        return obj;
    }

}
const img = products1.filter(isEmpty);
console.log(img);

const priceSort = products1.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
})
console.log(priceSort);