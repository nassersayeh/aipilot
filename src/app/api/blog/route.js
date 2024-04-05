import { Post } from "@/lib/modules"
import { connectToDb } from "@/lib/utuils"
import { NextResponse } from "next/server";

export const GET =async (req)=>{
    try{
        connectToDb()
        const posts = await Post.find();
        return NextResponse.json(posts)
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch posys!")
    }
}