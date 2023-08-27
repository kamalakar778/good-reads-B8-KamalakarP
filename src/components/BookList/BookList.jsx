import React from "react";
import BookData from "../../data/book";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h2 className="text-center">Books List</h2>
      <div className="row">
        {BookData.map((book) => (
          <Book data={book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
