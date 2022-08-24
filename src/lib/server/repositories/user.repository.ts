import type { PrismaClient } from "@prisma/client";
import type { IRepository } from "./repository";

export interface IUserRepository {
    getByEmail: (email: string) => Promise<any>
    getAllUsers: () => Promise<any[]>
    getUserById: (id: string) => Promise<any>
    getByUsername: (username: string) => Promise<any>
    create: ({email, password, username}: {email: string, password: string, username: string}) => Promise<any>
    update: (id: string, {email, password, username}: {email: string, password: string, username: string}) => Promise<any>
}


export class UserRepository implements IUserRepository {
    constructor(private readonly _db: IRepository) {
    }

    getByEmail(email: string) {
        return this._db.getFirst('user', {
            where: {
                email
            }
        })
    }

    getAllUsers() {
        return this._db.get('user', {where: {}})
    }

    getUserById(id: string) {
        return this._db.getFirst('user', {
            where: {
                id
            }
        })
    }

    create({email, password, username}) {

        return this._db.create('user', {
            data: {
                email, 
                password, 
                username
            }
        })
    }

    getByUsername(username) {
        return this._db.getFirst('user', {where: {username}});
    }

    update(id, {email, password, username}) {
        return this._db.update('user', {
            where: {id},
            data: {email, password, username}
        })
    }

}