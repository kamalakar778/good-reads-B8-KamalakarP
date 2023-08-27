import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { title, author, description, rating } = props.data;
  return (
    <>
      <div class="col-sm-3">
        <Link to="/bookdetails">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <p class="card-text">{rating}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Book;
