const bookService = require("../service/book_service");
const { validationResult } = require("express-validator");

const createBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({
      success: false,
      message: 'Bad Request',
      status: 400,
      errors: errors
    })
  }
  const { bookName, genre } = req.body;
  try {
    const result = await bookService.createBook(bookName, genre);
    return res.send({
      success: true,
      message: "Book created successfully",
      status: 200,
      result: result
    });
  } catch (error) {
    next(error);
  }
};

// doğru çalışıyor
const readBook = async (req, res, next) => {
  const {id} = req.params
  try {
    const result = await bookService.readBook(id);
    return res.send({
      status: 200,
      message: "ok, kullanici getirildi",
      result: result,
    });
  } catch (error) {
    // hata yakalarsa middleware e gönderiyor
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  const {id} = req.params
  try {
    const result = await bookService.deleteBook(id);
    return res.send({
      status: 200,
      message: "ok, kitap silindi!",
      result: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  readBook,
  deleteBook,
};
