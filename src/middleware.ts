import { NextResponse } from 'next/server';

export function middleware(reques: Request) {
  console.log('MIddle ware');
  console.log(reques.method);
  console.log(reques.url);

  const origin = reques.headers.get('origin');
  console.log(origin);
  return NextResponse.next();
}
