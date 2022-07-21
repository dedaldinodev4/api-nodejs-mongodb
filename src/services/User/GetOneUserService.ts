import { userRepository } from "../../repositories";
import { IUserRequestDTO } from "../../dtos/User";


export class GetOneUserService {

    async execute (id: string): Promise<IUserRequestDTO | Error> {


        const _repository = userRepository();

        const user = await _repository.findById(id);

        if (!user) {
            return new Error("User doesn't exists!");
        }

        return user;
    }
}