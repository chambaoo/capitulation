class Score {
    get totalScore() {
        const foods = Foods.getInstance();
        const total = foods.activeElementsScore.reduce((total, score) => total + score, 0);
        console.log(total);
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }

    render() {
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }
}

class Food {

    constructor(public element: HTMLElement) {
        element.addEventListener('click',this.clickEventHandler.bind(this));
    }

    clickEventHandler = () => {
        this.element.classList.toggle('food--active');
        const score = new Score();
        score.render();
    }
}

class Foods {

    // generics
    elements = document.querySelectorAll<HTMLDivElement>('.food');

    // singleton
    private static instance: Foods;
    
    private constructor() {
        this.elements.forEach(element => {
            new Food(element);
        })
    }
    static getInstance() {
        if (Foods.instance) return Foods.instance;
        return Foods.instance = new Foods();
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

const foods = Foods.getInstance();
