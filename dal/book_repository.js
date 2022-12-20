const bookTable = require("../model/book_table_model");

const createBook = async (bookName, genre) => {
  const data = {
    bookName,
    genre,
  };
  const addedBook = new bookTable(data)
  try {
    const result = await addedBook.save();
    return result
  } catch (error) {
    next(error)
  }
};

const readBook = async (id) => {
  const result = await bookTable.findById({ _id: id });

  return result;
};

const deleteBook = async (id) => {
  const result = await bookTable.findByIdAndRemove({ _id: id });

  return result;
};

module.exports = {
  createBook,
  readBook,
  deleteBook,
};
