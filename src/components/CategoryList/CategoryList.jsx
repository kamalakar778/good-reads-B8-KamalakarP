import React from "react";
import Category from "./Category/Category";

const CategoryList = () => {
  const items = [
    { catId: 1, CatName: "History" },
    { catId: 2, CatName: "Psychology" },
    { catId: 3, CatName: "Fiction" },
    { catId: 4, CatName: "Non-fiction" },
    { catId: 5, CatName: "Comedy" },
  ];
  return (
    <div>
      <h2 className="text-center">All categories</h2>
      <div className="row">
        {items.map((category) => {
          return <Category data={category} />;
        })}
      </div>
    </div>
  );
};

export default CategoryList;
