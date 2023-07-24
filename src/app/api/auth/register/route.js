import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  console.log("request", request);
  const { name, email, password } = await request.json();

  await connect();
  const hashedPassword = await bcrypt.hash(password, 6);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  console.log(newUser);

  try {
    await newUser.save();
    console.log("user saved");
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
