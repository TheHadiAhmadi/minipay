export function SuccessResponse(message: string, data: any, status = 200) {
    return new Response(JSON.stringify({
        data,
        message,
        status
    }))
}