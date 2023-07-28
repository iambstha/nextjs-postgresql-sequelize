"use server"
import Question from "@/models/Question";

const createQuestion = async (question, option1, option2, option3, correctAnswer) => {
  try {
    // Create a new question using Sequelize's create method
    const newQuestion = await Question.create({
      ques: question,
      op1: option1,
      op2: option2,
      op3: option3,
      correct: correctAnswer,
    });

    // Return the newly created question object
    return newQuestion;
  } catch (error) {
    console.error("Error creating question:", error);
    throw error;
  }
};

export default createQuestion;
