const mongoose = require("mongoose");
require('dotenv').config();

const db_name = process.env.db_name;
console.log(db_name);

mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong", err));