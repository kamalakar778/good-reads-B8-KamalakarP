import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="jumbatron text-center">
        <div className="display-4">About Us</div>
        <p className="lead"> This is simple Contact us Page</p>
        <div className="container">
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum
            necessitatibus voluptatibus velit minus expedita tempore natus,
            temporibus vitae optio qui iste error odio blanditiis ipsum
            doloribus consequatur, nostrum illum?
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum
            necessitatibus voluptatibus velit minus expedita tempore natus,
            temporibus vitae optio qui iste error odio blanditiis ipsum
            doloribus consequatur, nostrum illum?
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
