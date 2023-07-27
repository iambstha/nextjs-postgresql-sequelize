"use server"

import User from "@/models/User";

const createuser = async (fname, lname) => {
  try {
    const task = await User.create({
      fname,
      lname,
      completed: false,
    });
  } catch (error) {
    console.log(error)
    console.error('Error creating task:', error);
    throw error;
  }
};

export default createuser