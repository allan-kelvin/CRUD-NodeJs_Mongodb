import mongoose from "mongoose"

mongoose.connect("mongodb+srv://allan:1234@alura.h6djlrr.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;