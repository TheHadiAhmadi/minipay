export async function POST({request, locals}) {
    const body = await request.formData()

    console.log(locals)
    const username = body.get('username')
    const email = body.get('email')
    const password = body.get('password')

    // console.log("Signup ", {username, email, password})

    const result = await locals.userService.signup({email, username, password})
    console.log('POST')

    return {
        errors: {}
    }
} 