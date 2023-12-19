
import { NextResponse } from "next/server";
import db from '@/libs/db';

export async function GET(request: Request) {
    try {
        const roles = await db.role.findMany();
        return NextResponse.json(roles);
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
}