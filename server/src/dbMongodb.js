import mongoose from 'mongoose'
import { URL_DATA } from './config.js';


export const connectDB =  async () => {
    try {
        await mongoose.connect(URL_DATA);
        console.log("Database conectada");    
    } catch (error) {
        console.error(error)
    }
    
        
}
console.log("holaa")



