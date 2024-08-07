// headers.ts
import { NextRequest } from "next/server";
export const headers = (next: any) => {
  return async (request: NextRequest) => {
    return next(request);
  };
};