import * as crypto from 'crypto'

export function hashPassword(str: string) {
    if(str) {
        return crypto.createHash('sha256').update(str).digest('hex');
    }
    throw new Error('empty password')
}