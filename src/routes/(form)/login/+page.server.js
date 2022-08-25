import { redirect } from "@sveltejs/kit";

export async function POST({ request, locals }) {
  const body = await request.formData();

  const username = body.get("username");
  const password = body.get("password");

  console.log('login', {username, password})

  try {
    const result = await locals.services.UserService.login({
      username,
      password,
    });
    console.log(result)

    throw redirect(307, "/main");
  } catch (err) {
    return {
      errors: {
        general: err.message,
      },
    };
  }
}
