import { Request, Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService"

export class UpdateUserController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const { name, email, companyName, phone } = request.body;

        const service = new UpdateUserService();

        const result = await service.execute(id, {
            name, email, companyName, phone
        });

        if ( result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}