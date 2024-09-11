class Score {}

class Food {

    constructor(public element: HTMLElement) {
        element.addEventListener('click',this.clickEventHandler.bind(this));
    }

    clickEventHandler = () => {
        this.element.classList.toggle('food--active');
        console.log(foods.activeElements);
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

    get activeElements () {
        this._activeElements = [];

        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        })

        return this._activeElements;
    }
}

const foods = new Foods();
