import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET(){
    try{
        const data = await User.findAll()
        return NextResponse.json(data || [])
    }catch(error){
        return NextResponse.json({error : 'Error fetching data.'})
    }
}

export async function POST(req,res){
    const { fname, lname } = req.body;
    console.log(req.body)
    if(!fname || !lname){
        return NextResponse.json({error: "Required parameters not fulfilled."})
    }
    try {
        const data = await User.create({ fName: fname, lName: lname })
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error : "Error creating data." })
    }
}