import prisma from "@/app/lib/db";
import { getCurrentUser } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const user = await getCurrentUser();

    try {
        if(!user?.email) {
            return NextResponse.json({message: 'Not Authenticated!'}, {status: 401})
        }
        const { title, content} = await req.json()

        const newPost = await prisma.post.create({
            data: {
                title, content, authorEmail: user.email
 
            }
        })
         return NextResponse.json({newPost}, {status: 200} )

    } catch (error){
        return NextResponse.json({message: "somethign went wrong!"}, {status: 500})
    }
}