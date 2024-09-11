class Score {}

class Food {
    constructor(public element: HTMLElement) {
        element.addEventListener('click',this.clickEventHandler);
    }

    clickEventHandler = () => {
        console.log(this);
        this.element.classList.toggle('food--active');
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
}

const foods = new Foods();
