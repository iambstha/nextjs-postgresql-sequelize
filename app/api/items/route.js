import { NextResponse } from "next/server";
import Item from "@/models/Item";

export async function GET(){
    const data = await Item.findAll()

    return NextResponse.json(data)
}