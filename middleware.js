import { NextResponse } from "next/server"; // to generate responses


//Middleware in Next.js allows you to run code before handling a request or rendering a page
// In php this is called session PHP Sessions and middleware is almost same for redirect/rewrite
//if loggedin then proceed otherwise stay at signup page.
export default function middleware(req) {
  let verify = req.cookies.get("loggedin-cookie");
  let url = req.url

  // !verify =  not verify then remain in dashboard 
  if (!verify && url.includes('/dashboard')) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  // if verified ( logged in ) then i can redirect to dashboard
  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }


}