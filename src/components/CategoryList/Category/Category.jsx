import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  // const { catId, catName } = Object.values(props.data);
  // console.log(catId);
  console.log(Object.values(props.data));
  // console.log(catName);
  return (
    <>
      <div class="col-sm-3">
        <Link to="/books">
          <div class="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
              class="card-img-top"
              alt="..."
            />
            {Object.values(props.data).cartName}
            <div class="card-body">
              {/* <p class="card-title" key={catId}></p> */}
              {/* <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p> */}
              <a href="/books" class="btn btn-primary">
                {/* See {catName} Books */}
              </a>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Category;
