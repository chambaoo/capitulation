"use strict";
class Score {
    get totalScore() {
        const foods = Foods.getInstance();
        const total = foods.activeElementsScore.reduce((total, score) => total + score, 0);
        console.log(total);
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
}
class Food {
    constructor(element) {
        this.element = element;
        this.clickEventHandler = () => {
            this.element.classList.toggle('food--active');
            const score = new Score();
            score.render();
        };
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
}
class Foods {
    constructor() {
        // generics
        this.elements = document.querySelectorAll('.food');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(element => {
            new Food(element);
        });
    }
    static getInstance() {
        if (Foods.instance)
            return Foods.instance;
        return Foods.instance = new Foods();
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
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
}
const foods = Foods.getInstance();
