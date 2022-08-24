export async function load({params, locals}) {
    return {
        user: await locals.repos.user.getUserById(params.id)
    }
}