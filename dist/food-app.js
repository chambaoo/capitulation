"use strict";
class Score {
}
class Food {
    constructor(element) {
        this.element = element;
        this.clickEventHandler = () => {
            console.log(this);
            this.element.classList.toggle('food--active');
        };
        element.addEventListener('click', this.clickEventHandler);
    }
}
class Foods {
    constructor() {
        // generics
        this.elements = document.querySelectorAll('.food');
        this.elements.forEach(element => {
            new Food(element);
        });
    }
}
const foods = new Foods();
