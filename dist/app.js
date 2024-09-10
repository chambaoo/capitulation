"use strict";
class Score {
}
class Food {
}
class Foods {
    constructor() {
        // generics
        this.elements = document.querySelectorAll('.food');
        this.show = () => {
            console.log(this.elements);
        };
        this.elements.forEach(elements => {
            new Food();
        });
    }
}
function runApp() {
    console.log('hello');
    const food = new Foods();
    food.show();
    console.log('done');
}
runApp();
