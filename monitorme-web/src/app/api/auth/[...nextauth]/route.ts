import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/libs/db';
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req): Promise<any> {
                const userFound = await db.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                if(!userFound) return null;
                const matchPass = await bcrypt.compare(credentials!.password, userFound.password);
                if(!matchPass) return null;
                const user = {
                    id: userFound.id,
                    email: userFound.email,
                    name: userFound.roleId
                }
                return user
            }
        })
    ],
    secret: process.env.SECRET,
    pages: {
        signIn: '/auth/login/'
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }