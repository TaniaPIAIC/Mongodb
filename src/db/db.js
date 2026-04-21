const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://backend:yH5iFZwoQdxNs6YD@backend.kldigrp.mongodb.net/helley")
}