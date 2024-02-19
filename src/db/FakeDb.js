import { Burger } from "../models/Burger.js";

class FakeDb {
    burgers = [
        new Burger({ id: 1, name: 'Big Fatty', price: 10, hasCheese: true, hasBacon: true })

    ]
}