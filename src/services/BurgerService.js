import { fakeDb } from "../db/FakeDb.js"

class BurgerService {

    getBurgers() {
        const burgers = fakeDb.burgers
        return burgers
    }

}

export const burgerService = new BurgerService()