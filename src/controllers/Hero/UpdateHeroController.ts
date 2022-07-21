import { Request, Response } from "express";
import { UpdateHeroService } from "../../services/Hero"


export class UpdateHeroController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const { name, age, power, team } = request.body;

        const service = new UpdateHeroService();

        const result = await service.execute(id, {name, age, power, team});

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}