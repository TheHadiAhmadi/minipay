export async function GET({request, locals}) {
    return locals.controllers.user.login(request)
}