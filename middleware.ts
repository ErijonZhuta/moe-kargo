import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { useEffect } from "react";

const initialState = {
  access:
    typeof window !== "undefined" ? window.localStorage.getItem("token") : true,
};

export function middleware(req: NextRequest) {
  // protected routes (admin routes)
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log(initialState);
    if (initialState.access) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // login & register routes
  if (["/login", "/register"].includes(req.nextUrl.pathname)) {
    if (initialState.access) {
      console.log(initialState);
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      return NextResponse.next();
    }
  }
}
