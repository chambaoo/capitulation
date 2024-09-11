class Score {}

class Food {
    constructor(public element: HTMLElement) {
        element.addEventListener('click',this.clickEventHandler.bind(this));
    }

    clickEventHandler = () => {
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
