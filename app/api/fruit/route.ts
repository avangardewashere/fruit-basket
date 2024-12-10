import { NextResponse } from "next/server";
import Fruits from "@/models/Fruit"

export async function POST (req:Request){
	try {
		const body = await req.json();
	} catch (e) {
		console.log(e)
	}
}