const mongoose = require('mongoose');
const config = require('../config/index')
const bcrypt = require('bcrypt')


// const { name, email, password } = req.body;
/* Creating a schema for the user model. */
const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: {
        type: String,
        required: true,
        validate: /^https?/,
        default: 'https://source.unsplash.com/random',
        set(value) { return 'https://source.unsplash.com/random' }
    },
})

/* A method that compares the password that the user enters with the password that is stored in the
database. */
userSchema.methods = {
    comparePass(pass) {
        return bcrypt.compare(pass, this.password)
    }
}


/* Hashing the password before saving it to the database. */
userSchema.pre('save', async function() {

    const salt = bcrypt.genSaltSync(config.saltRounds);
    await bcrypt.hash(this.password, salt).then(hash => {
        this.password = hash;
    })
})



/* Exporting the user model. */
module.exports = mongoose.model('User', userSchema)