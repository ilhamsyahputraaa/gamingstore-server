const mongoose = require('mongoose')
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "Nama Game Harus diisi."] },
      category: { type: String, require: [true, "Kategori Harus diisi."] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "Nama Coin Harus diisi."] },
      coinQuantity: {
        type: String,
        require: [true, "Jumlah Coin Harus diisi."],
      },
      price: { type: Number },
    },
    historyPayment: {
      name: { type: String, require: [true, "Nama Harus diisi."] },
      type: { type: String, require: [true, "Tipe Pembayaran Harus diisi."] },
      bankName: { type: String, require: [true, "Nama bank Harus diisi."] },
      noRekening: {
        type: String,
        require: [true, "nomer Rekening Harus diisi."],
      },
    },
    name: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [225, "Panjang nama Maksimal 225 Karakter"],
      minLength: [3, "Panjang nama minimal 3 Karakter"],
    },
    name: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [225, "Panjang nama Maksimal 225 Karakter"],
      minLength: [3, "Panjang nama minimal 3 Karakter"],
    },
    accountUser: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [225, "Panjang nama Maksimal 225 Karakter"],
      minLength: [3, "Panjang nama minimal 3 Karakter"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "Nama Harus diisi."] },
      phoneNumber: {
        type: Number,
        require: [true, "Nomer Telepon harus diisi"],
        maxLength: [13, "Panjang nama Maksimal 13 Karakter"],
        minLength: [9, "Panjang nama minimal 9 Karakter"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timeStamp: true }
);


module.exports = mongoose.model('Transaction', transactionSchema)