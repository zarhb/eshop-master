
import { NextResponse } from "next/server"

export const config={
  matcher:["/admin/:path*"]
}

export default function middleware(request){
  
  // console.log(request.nextUrl.origin);
  // console.log(request.nextUrl.pathname);
  // console.log(request.headers.get("user-agent"));
 
    if(request.cookies.get("token")=== undefined){
      return NextResponse.redirect(`${request.nextUrl.origin}/users/login`); 
    }
  //   if(request.cookies.get("token")){
  //     return NextResponse.rewrite(new URL('/admin/dashboard', request.nextUrl.origin));
  //  }
    // if(request.nextUrl.pathname.startsWith('/')){
    //    return NextResponse.redirect(`${request.nextUrl.origin}/admin/dashboard`);
    // }
}