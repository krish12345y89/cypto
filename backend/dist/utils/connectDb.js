import mongoose from "mongoose";
let next;
export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("connect to the database");
        });
    }
    catch (error) {
        console.error(error);
    }
};
