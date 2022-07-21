import { Request, Response } from "express";
import { DeleteHeroService } from "../../services/Hero"


export class DeleteHeroController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const service = new DeleteHeroService();

        const result = await service.execute(id);

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}