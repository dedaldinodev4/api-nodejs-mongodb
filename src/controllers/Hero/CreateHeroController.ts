import { Request, Response } from "express";
import { CreateHeroService } from "../../services/Hero"


export class CreateHeroController {

    async handle(request: Request, response: Response) {

        const { name, age, power, team } = request.body;

        const service = new CreateHeroService();

        const result = await service.execute({name, age, power, team});

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}