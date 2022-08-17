export async function POST() {
    console.log('POST')
    return {
        status: 400,
        errors: {
            username: 'Username should be Hadi',
            email: 'Email should be hadi@gmail.com',
            password: 'Password should be 123'
        }
    }
} 