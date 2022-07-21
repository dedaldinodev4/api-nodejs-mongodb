import { userRepository } from "../../repositories";
import { IUserRequestDTO } from "../../dtos/User";


export class GetAllUsersService {

    async execute () {

        const _repository = userRepository();

        const user = await _repository.find();

        return user;
    }
}