import { NextResponse } from 'next/server';
import fs from 'fs';
import { join } from 'path';
import uploadimage from '@/db/op/uploadImage';
import Image from '@/models/Image';

export async function POST(req, res) {
  const formData = await req.formData();
  const imageFile = formData.get('image');

  if (imageFile) {
    const filename = imageFile.name;
    const filePath = join(process.cwd(), 'uploads', filename);

    // Save the file to the 'uploads' folder
    const fileStream = fs.createWriteStream(filePath);

    if (imageFile) {
      const filename = imageFile.name;
      await uploadimage(filename);
    }

    return NextResponse.json({ message: 'Image uploaded successfully.' });
  }

  return NextResponse.json({ error: 'No image file provided.' });
}

export async function GET(){
  const data = await Image.findAll()
  return NextResponse.json(data)
}
