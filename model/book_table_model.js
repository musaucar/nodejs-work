const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: {
      type: String,
      required: [true, "Lüften kitap ismi giriniz."],
    },
    genre: {
      type: String,
    },
  },
  { collection: "bookInfo", timestamps: true }
);

const bookInfo = mongoose.model("bookInfo", bookSchema);

module.exports = bookInfo;