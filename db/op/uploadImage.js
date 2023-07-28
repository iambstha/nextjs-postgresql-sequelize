"use server"
import Image from "@/models/Image";

const uploadimage = async (filename) => {
  try {
    await Image.create({
      filename
    });
  } catch (error) {
    console.log(error)
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default uploadimage