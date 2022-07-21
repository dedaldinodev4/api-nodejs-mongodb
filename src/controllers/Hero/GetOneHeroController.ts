import { Request, Response } from "express";
import { GetOneHeroService } from "../../services/Hero"


export class GetOneHeroController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const service = new GetOneHeroService();

        const result = await service.execute(id);

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}