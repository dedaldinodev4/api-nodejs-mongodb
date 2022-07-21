import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/User/GetAllUsersService";


export class GetAllUsersController {

    async handle(request: Request, response: Response) {

        const service = new GetAllUsersService();

        const result = await service.execute();

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}