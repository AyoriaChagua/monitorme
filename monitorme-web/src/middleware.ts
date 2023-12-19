import { withAuth } from "next-auth/middleware"
export default withAuth({
    secret: process.env.SECRET
})
export const config = { matcher: [
    "/teacher/dashboard/:path", 
    "/admin/dashboard/:path", 
    "/teacher/labs/:path",
    "/admin/users/:path",
] }