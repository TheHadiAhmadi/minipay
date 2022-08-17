export async function POST({request}) {
    const body = await request.formData()

    const username = body.get('username')
    const email = body.get('email')
    const password = body.get('password')

    console.log("Signup ", {username, email, password})

} 