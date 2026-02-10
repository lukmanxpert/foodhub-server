import { JWTPayload } from "better-auth";

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}
