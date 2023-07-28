"use server"
import Submission from "@/models/Submission";

const submitanswer = async (fname, lname, selectedOptions) => {
  try {
    await Submission.create({
      fname,
      lname,
      selectedOptions
    });
    console.log("Answers submitted")
  } catch (error) {
    console.log(error)
    console.error('Error submitting answers:', error);
    throw error;
  }
};

export default submitanswer