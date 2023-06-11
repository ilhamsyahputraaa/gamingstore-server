const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const HASH_ROUND = 10

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email harus diisi"],
    },
    name: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [225, "Panjang nama Maksimal 225 Karakter"],
      minLength: [3, "Panjang nama minimal 3 Karakter"],
    },
    username: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [225, "Panjang username Maksimal 225 Karakter"],
      minLength: [3, "Panjang username minimal 3 Karakter"],
    },
    password: {
      type: String,
      require: [true, "Kata Sandi harus diisi"],
      maxLength: [100, "Panjang password Maksimal 100 Karakter"],
      minLength: [8, "Panjang password minimal 8 Karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      require: [true, "Kata Sandi harus diisi"],
      maxLength: [13, "Panjang nomer telepon Maksimal 100 Karakter"],
      minLength: [8, "Panjang nomer telepon minimal 8 Karakter"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timeStamp: true }
);

playerSchema.path('email').validate(async function (value) {
  try {
    const count = await this.model('Player').countDocuments({ email: value })
    
    return !count
  } catch (err) {
    throw err
  }
}, attr => `${attr.value} sudah terdaftar`)

playerSchema.pre('save', function (next){
  this.password = bcrypt.hashSync(this.password, HASH_ROUND)
  next()
})

module.exports = mongoose.model("Player", playerSchema);
