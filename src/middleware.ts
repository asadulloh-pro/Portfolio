import { NextResponse } from "next/server";

export function middleware(reques: Request) {
  const origin = reques.headers.get("origin");
  return NextResponse.next();
}
