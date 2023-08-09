import mongoose from "mongoose";

export async function connect(){
    try{
        await mongoose.connect('mongodb+srv://jean:46616264@hero-code.tn5zmek.mongodb.net/',
        );
        console.log('Connect database success');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
}