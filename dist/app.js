"use strict";
class Score {
}
class Food {
}
class Foods {
    constructor() {
        // generics
        this.elements = document.querySelectorAll('.food');
        this.elements.forEach(elements => {
            new Food();
        });
    }
}
function runApp() {
    console.log('hello');
}
runApp();
