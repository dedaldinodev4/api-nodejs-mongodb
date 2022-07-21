import { Request, Response } from "express";
import { GetAllHeroesService } from "../../services/Hero"


export class GetAllHeroesController {

    async handle(request: Request, response: Response) {

        const service = new GetAllHeroesService();

        const result = await service.execute();

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}