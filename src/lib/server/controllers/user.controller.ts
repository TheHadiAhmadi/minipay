import type { IUserService } from "../services";
import { SuccessResponse, ErrorResponse, APIError } from "../utils";

export class UserController {
  constructor(private readonly _userService: IUserService) {}

  async login(request: Request) {
    try {
      const body = await request.formData();

      const username = body.get("username") as string;
      const password = body.get("password") as string;

      if(!username || !password) {
        throw new APIError(400, "Username and password are required fields")
      }

      const result = await this._userService.login({ username, password });

      return SuccessResponse("Successfully Logged in!", result)
    } catch (err) {
      return ErrorResponse(err)
    }
  }

  async signup(request: Request) {
    try {
      const body = await request.formData();

      const username = body.get("username") as string;
      const password = body.get("password") as string;
      const email = body.get("email") as string;

      if(!username || !email || !password) {
        throw new APIError(400, 'username, email and password are required fields')
      }
      const result = await this._userService.signup({ username, password, email });

      const r2 =  SuccessResponse("Successfully created your account!", result);
      console.log(r2)
      return r2
    } catch (err) {
      return ErrorResponse(err)
    }
  }
}
