import { Burger } from "../models/Burger.js";

class FakeDb {
    burgers = [
        new Burger({ id: 1, name: 'Big Fatty', price: 10, hasCheese: true, hasBacon: true }),
        new Burger({ id: 2, name: 'Icky Gutter Ball', price: 12, hasCheese: false, hasBacon: false }),
        new Burger({ id: 3, name: 'Slop Trough', price: 12, hasCheese: true, hasBacon: false }),
        new Burger({ id: 4, name: 'Kitchen Sink', price: 15, hasCheese: true, hasBacon: true })

    ]
}

export const fakeDb = new FakeDb()