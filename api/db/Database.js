const mongoose = require("mongoose");

let instance = null;
class DataBase {

    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }

    async connect(options) {



        try {
            console.log("bağlanacak ins")

            let db = await mongoose.connect(options.CONNECTION_STRING)
            this.mongoConnection = db

            console.log("bağlandı kral")
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            process.exit(1); // Exit the process with an error code
        }
    }

}

module.exports = DataBase;