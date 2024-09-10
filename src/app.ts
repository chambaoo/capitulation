class Score{}
class Food{}
class Foods{
    // generics
    elements = document.querySelectorAll<HTMLDivElement>('.food');

    show = () => {
        console.log(this.elements);
    }

    constructor() {
        this.elements.forEach(elements => {
            new Food();
        })
    }
}

function runApp() {
    console.log('hello');

    const food = new Foods();
    food.show();

    console.log('done');

}

runApp();

