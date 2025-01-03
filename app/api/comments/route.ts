import prisma from "@/app/lib/db";
import { getCurrentUser } from "@/app/lib/session";

import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const user = await getCurrentUser();

    
        if(!user?.email) {
            return NextResponse.json({message: 'Not Authenticated!'}, {status: 401})
        }
        const {postId, text} = await req.json()

        const newPost = await prisma.comment.create({
            data: {
               postId, text, authorEmail: user.email
 
            }
        })
         return NextResponse.json({newPost}, {status: 200} )

    
      
}