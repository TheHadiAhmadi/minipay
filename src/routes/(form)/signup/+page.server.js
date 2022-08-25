import { redirect } from "@sveltejs/kit"

export async function POST({request, locals}) {
    const body = await request.formData()

    console.log(locals)
    const username = body.get('username')
    const email = body.get('email')
    const password = body.get('password')

    // console.log("Signup ", {username, email, password})

    try {

        const result = await locals.userService.signup({email, username, password})

        throw redirect(303, '/main')

    } catch(err) {
        return {
            errors: {
                general: err.message
            }
        }
    
    }

    

} 