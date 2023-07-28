import { NextResponse } from "next/server";
import User from "@/models/User";
import Question from "@/models/Question";

export async function GET() {
  try {
    // Fetch all users with their associated questions
    const usersWithQuestions = await User.findAll({
      include: Question, // Include the associated questions
    });

    // Return the data in the desired format
    const formattedData = usersWithQuestions.map((user) => ({
      id: user.id,
      fname: user.fname,
      lname: user.lname,
      completed: user.completed,
      questions: user.Questions.map((question) => ({
        questionId: question.id,
        ques: question.ques,
        op1: question.op1,
        op2: question.op2,
        op3: question.op3,
        correct: question.correct,
      })),
    }));

    return NextResponse.json(formattedData || []);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data.' });
  }
}


// export async function POST(req,res){
//     const { fname, lname } = req.body;
//     console.log(req.body)
//     if(!fname || !lname){
//         return NextResponse.json({error: "Required parameters not fulfilled."})
//     }
//     try {
//         const data = await User.create({ fName: fname, lName: lname })
//         return NextResponse.json(data)
//     } catch (error) {
//         return NextResponse.json({ error : "Error creating data." })
//     }
// }