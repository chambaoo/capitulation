"use strict";
class Score {
}
class Food {
    constructor(element) {
        this.element = element;
        this.clickEventHandler = () => {
            this.element.classList.toggle('food--active');
            console.log(foods.activeElements);
        };
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
}
class Foods {
    constructor() {
        // generics
        this.elements = document.querySelectorAll('.food');
        this._activeElements = [];
        this.elements.forEach(element => {
            new Food(element);
        });
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
}
const foods = new Foods();
