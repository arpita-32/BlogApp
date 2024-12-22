const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
    mongoose
        .connect(process.env.DATABASE_URL)
        .then(() => console.log("DB connected successfully"))
        .catch((error) => {
            console.log("DB facing connection issue");
            console.log(error);
            process.exit(1); // Exit the process on connection failure
        });
};

module.exports = connectWithDb;