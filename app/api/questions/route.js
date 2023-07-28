import { NextResponse } from "next/server";
import Question from "@/models/Question";

export async function GET(){
    const data = await Question.findAll()

    return NextResponse.json(data)
}