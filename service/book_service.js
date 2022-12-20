const bookRepository = require("../dal/book_repository");

const createBook = async (bookName, genre) => {
    const result = await bookRepository.createBook(bookName, genre);
    return result;
};

const readBook = async (id) => {
    const result = await bookRepository.readBook(id);
    return result;
};

const deleteBook = async (id) => {
    const result = await bookRepository.deleteBook(id);
    return result;
};

module.exports = {
    createBook,
    readBook,
    deleteBook,
};