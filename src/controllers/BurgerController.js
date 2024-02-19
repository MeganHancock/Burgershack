import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgerController extends BaseController {

    // http://localhost:3000/api/burgers

    constructor() {
        super('api/burgers');
        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
            .delete('/:burgerId', this.removeBurger)
    }


    /**
     * Sends all values back to the client
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
    */
    async getBurgers(request, response, next) {
        try {
            // response.send('burger shack')
            // @ts-ignore
            const burgers = burgerService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    /**
     * Sends all values back to the client
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
    */
    createBurger(request, response, next) {
        const burgerData = request.body
        const burger = burgerService.createBurger(burgerData)
        response.send(burger)
    }

    /**
     * Sends all values back to the client
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
    */

    removeBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const message = burgerService.removeBurger(burgerId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }
}