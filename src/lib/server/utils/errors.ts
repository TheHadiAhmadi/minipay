export class APIError extends Error {
    status = 500;
    constructor(status, message) {
        super(message)
        this.status = status
    }
}

export function ErrorResponse(error) {
    return new Response(JSON.stringify({message: error.message, status: error.status ?? 500}))
}