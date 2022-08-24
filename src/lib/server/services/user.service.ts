
import type { IUserRepository } from "../repositories/user.repository";
import { APIError } from "../utils/errors";
import type { IJWTService } from "./jwt.service";
import { hashPassword } from "../utils/password-hash";

export interface IUserService {
    signup: ({email, username, password}: {email: string, username: string, password: string}) => Promise<object>
    login: ({username, password}: {username: string, password: string}) => Promise<object>
}

export class UserService implements IUserService {
    constructor(private readonly _userRepo: IUserRepository, private readonly _jwtService: IJWTService) {}

    async signup({email, username, password}) {
        console.log(hashPassword(password))

        console.log(this._userRepo)
        const result = await this._userRepo.create({email, username, password: hashPassword(password)})

        console.log({result})
        const token = await this._jwtService.sign({email, username}, 7 * 24 * 60 * 60 * 1000)

        console.log({token})

        return result
    }

    async login({username, password}) {
        const result = await this._userRepo.getByUsername(username);

        if(!result) throw new APIError(404, 'User with this username does not exists')

        if(result.password !== hashPassword(password)) throw new APIError(400, 'Password doesn\'t match')

        return result
    }
}