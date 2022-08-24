export async function POST({request, locals}) {
    return locals.controllers.user.signup(request)
}