export async function load({request, locals}) {
    return {
        users: await locals.repos.UserRepository.getAllUsers()
    }
}

export async function POST({request, params, locals}) {
    
}