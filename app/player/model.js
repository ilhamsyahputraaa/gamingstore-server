const mongoose = require("mongoose");
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

module.exports = mongoose.model("Player", playerSchema);
