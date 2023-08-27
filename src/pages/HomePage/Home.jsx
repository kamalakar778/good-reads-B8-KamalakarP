import React from "react";
import BookPage from "../BookPage/Book";
import CategoryList from "../../components/CategoryList/CategoryList";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <CategoryList />
      </div>
    </>
  );
};

export default HomePage;
