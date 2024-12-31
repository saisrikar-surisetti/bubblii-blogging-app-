import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import prisma from "./db"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
}