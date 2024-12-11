import mongoose,{Schema,Document,model}from 'mongoose';

import {v4 as uuidv4} from 'uuid';

export interface IFruit extends Document{
	id:string;
	fruitName:string;
	details:string;
}

const FruitSchema:Schema<IFruit> = new Schema({
	id:{
		type:String,
		default:uuidv4,
		unique:true,
		required:true,
	},
	fruitName:{
		type:String,
		required:true,
	},
	details:{
		type:String,
		required:true
	},
	
},{timestamps:true})


const Fruit =mongoose.models.Fruit ||  mongoose.model<IFruit>('Fruit',FruitSchema)

export default Fruit