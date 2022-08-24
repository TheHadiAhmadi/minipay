import prisma from "$lib/prisma";
import { UserRepository } from "./lib/server/repositories";
import { JWTService, UserService } from "./lib/server/services";
import { JWT_SECRET } from "$env/static/private";
import { UserController } from "$lib/server";
import { PrismaRepository } from "$lib/server/repositories/repository";

export async function handle({ event, resolve }) {
  event.locals = {
    repos: {},
    services: {},
    controllers: {},
  };

  function addController(name, controller, ...args) {
    event.locals.controllers[name] = new controller(...args);
  }

  function addRepository(repository, ...args) {
    const name= repository.constructor.name;
    event.locals.repos[name] = new repository(...args);
  }

  function repo(Repo) {
    const name = Repo.constructor.name
    return event.locals.repos[name];
  }

  function addService(service, ...args) {
    const name = service.constructor.name
    event.locals.services[name] = new service(...args);
  }

  function service(Service) {
    const name = Service.constructor.name; 
    return event.locals.services[name];
  }

  const db = new PrismaRepository(prisma);

  addRepository(UserRepository, db);
  addService(JWTService, API_KEY_SECRET);
  addService(UserService, repo(UserRepository), service(JWTService));
  addController('user', UserController, service(UserService));

  return resolve(event, { ssr: false });
}
