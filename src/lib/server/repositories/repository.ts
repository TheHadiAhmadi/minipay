// Base class

import type { PrismaClient } from "@prisma/client";

export interface IRepository {
    create: (table: string, { data } : {data: object}) => Promise<any>,
    update: (table: string, { where, data } : {where: object, data: object}) => Promise<any>,
    remove: (table: string, { where } : {where: object}) => Promise<any>,
    get: (table: string, { where } : {where: object}) => Promise<any[]>,
    getFirst: (table: string, { where } : {where: object}) => Promise<any>
}

export class PrismaRepository implements IRepository {
    constructor(private readonly _db: PrismaClient) {
    }

    async create(table, {data}) {
        return this._db[table].create({data})
    }
    async update(table, {data, where}) {
        return this._db[table].update({data, where})
    }
    async get(table, {where}) {
        return this._db[table].findMany({ where})
    }
    async getFirst(table, {where}) {
        return this._db[table].findFirst({where})
    }
    async remove(table, {where}) {
        return this._db[table].remove({where})
    }
    
}