import { NextResponse } from "next/server";
import Fruits from "@/models/Fruit";
import connectMongoDB from "@/libs";

export async function POST(req: Request) {
  try {
    const { fruitName, details } = await req.json();

    await connectMongoDB();

    await Fruits.create({ fruitName, details });

    return NextResponse.json(
      { message: "A new Fruit Item has been Added.", fruit: fruitName },
      { status: 201 }
    );
  } catch (e: any) {
    console.log(e);

    return NextResponse.json(
      {
        message: "Error in Creating a new Fruit item.",
        error: e.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(){
	await connectMongoDB();
	const fruits = await Fruits.find();
	return NextResponse.json({fruits});
	
}
