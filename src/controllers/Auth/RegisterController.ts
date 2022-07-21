import { Request, Response } from "express";
import { RegisterService } from "../../services/Auth/RegisterService";


export class RegisterController {

    async handle(request: Request, response: Response) {

        const { email, name, password } = request.body;

        const service = new RegisterService();

        const result = await service.execute({email, name, password});

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}