export async function load({params, locals}) {
    return {
        user: await locals.repos.UserRepository.getUserById(params.id)
    }
}