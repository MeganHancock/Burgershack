import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burger.js"

class BurgerService {

    getBurgers() {
        const burgers = fakeDb.burgers
        return burgers
    }

    createBurger(burgerData) {
        const newBurger = new Burger(burgerData)

        const lastBurger = fakeDb.burgers[fakeDb.burgers.length - 1]
        newBurger.id = lastBurger.id + 1
        fakeDb.burgers.push(newBurger)
        return newBurger
    }
}

export const burgerService = new BurgerService()