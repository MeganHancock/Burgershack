import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

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

    removeBurger(burgerId) {
        const burgerIndex = fakeDb.burgers.findIndex(burger => burger.id == burgerId)
        if (burgerIndex == -1) {
            throw new BadRequest('no burger with supplied ID')
        }
        fakeDb.burgers.splice(burgerIndex, 1)
        return 'Burger removed!'
    }
}

export const burgerService = new BurgerService()