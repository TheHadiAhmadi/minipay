import prisma from '$lib/prisma'
export async function GET() {
    const data = await prisma.users.findMany()
    return new Response(JSON.stringify(data))
}