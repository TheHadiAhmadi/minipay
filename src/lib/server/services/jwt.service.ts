import jwt from 'jsonwebtoken'

export interface IJWTService {
    sign: (data: object, expiresIn: number) => Promise<any>
    verify: (token: string) => Promise<any>
}


export class JWTService implements IJWTService {
    constructor(private readonly _secret: string) {}

    async sign(data: object, expiresIn: number) {
        return jwt.sign({data}, this._secret, {expiresIn})
    }

    async verify(token: string) {
        return jwt.verify(token, this._secret)
    }
}