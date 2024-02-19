export class Burger {

    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.hasCheese = data.hasCheese || false
        this.hasBacon = data.hasBacon || false
    }
}