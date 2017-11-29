var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        
    },
})