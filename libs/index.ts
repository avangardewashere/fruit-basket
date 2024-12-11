import mongoose from "mongoose";

const connectMongoDB = async () => {
	// console.log("connected:",process.env.MONGODB_URI)
    try{
		await mongoose.connect(`${process.env.MONGODB_URI}`)

	}catch(err){
		console.log(err)
	}
}

export default connectMongoDB;