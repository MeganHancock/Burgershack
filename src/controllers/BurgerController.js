import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgerController extends BaseController {

    constructor() {
        super('api/burgers');
        this.router.get('', this.getBurgers)
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
}