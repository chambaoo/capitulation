class Score {
    get totalScore() {
        const foods = new Foods();
        const total = foods.activeElementsScore.reduce((total, score) => total + score, 0);
        console.log(total);
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
}

class Food {

    constructor(public element: HTMLElement) {
        element.addEventListener('click',this.clickEventHandler.bind(this));
    }

    clickEventHandler = () => {
        this.element.classList.toggle('food--active');
        console.log(foods.activeElements);
        console.log(foods.activeElementsScore);
    }
}

class Foods {
    // generics
    elements = document.querySelectorAll<HTMLDivElement>('.food');

    constructor() {
        this.elements.forEach(element => {
            new Food(element);
        })
    }

    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];

    get activeElements () {
        this._activeElements = [];

        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        })

        return this._activeElements;
    }

    get activeElementsScore() {
        this._activeElementsScore = [];

        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        })

        return this._activeElementsScore;
    }
}

const foods = new Foods();
