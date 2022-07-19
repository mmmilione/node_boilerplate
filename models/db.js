import mongoose from "mongoose";
import allSecrets from "../secrets.js";

const mongo = (app) => {
    
    try{

        const Options = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }

        mongoose.connect(allSecrets.connection, Options);
        mongoose.connection.once('open', () => { 
            console.log('Connected to Mongo');
            app.listen(3500, () => console.log("Listening to port 3500"));
        })
        
    }catch(error){
        console.log("Connection to Mongo Failed: " + error);
    }

}

export default mongo;
