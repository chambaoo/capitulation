class Score{}
class Food{}
class Foods{
    // generics
    elements = document.querySelectorAll<HTMLDivElement>('.food');

    constructor() {
        this.elements.forEach(elements => {
            new Food();
        })
    }
}