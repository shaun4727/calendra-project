import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";


export async function getUsers(){
    const users = await Prisma.user.findMany();
    return NextResponse.json(users);
}