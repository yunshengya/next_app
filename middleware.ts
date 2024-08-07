import { logging } from "@/middlewares/logging";
import { headers } from "@/middlewares/headers";
import { NextResponse } from "next/server";

function chain(functions: any, index = 0) {
    const current = functions[index];
    if (current) {
        const next: any = chain(functions, index + 1);
        return current(next);
    }
    return () => NextResponse.next();
}

export default chain([logging, headers]);

export const config = {
    matcher: '/api/:path*',
}
