const mongoose = require('mongoose')
let categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama Kategory harus diisi"],
    },
  },
  { timeStamp: true }
);


module.exports = mongoose.model('Category', categorySchema)