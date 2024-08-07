// logging.ts
import { NextRequest } from "next/server";
export const logging = (next: any) => {
  return async (request: NextRequest) => {
    // ...
    console.log('logging')
    return next(request);
  };
};