import { NextResponse } from "next/server";


export default function Middleware(request) {


    // terminal console me dikhega ye req and res se pahle chlega
    // console.log(" Shubham")

// // kisi page ko acsses kare to wo login par redirect kar de 
// return NextResponse.redirect(new URL ("/login", request.url))
    
 // This page isn’t working localhost redirected you too many times




// solve many times redirection 

    // // kisi page ko acsses kare to wo login par redirect kar de 
     
    //  if (request.nextUrl.pathname!= "/login") {
       return NextResponse.redirect(new URL ("/login", request.url))
    //  }




  

    
        
  
}
  //only ek ek page ko redirect karne ke liye aise karenge 

  export const config={
    matccher:"/about/path*"
  }
