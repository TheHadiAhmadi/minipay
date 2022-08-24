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
    event.locals.repos[repository.name] = new repository(...args);
  }

  function repo(Repo) {
    return event.locals.repos[Repo.name];
  }

  function addService(service, ...args) {
    event.locals.services[service.name] = new service(...args);
  }

  function service(Service) {
    return event.locals.services[Service.name];
  }

  const db = new PrismaRepository(prisma);

  addRepository(UserRepository, db);
  addService(JWTService, JWT_SECRET);
  addService(UserService, repo(UserRepository), service(JWTService));
  addController('user', UserController, service(UserService));

  return resolve(event, { ssr: false });
}
