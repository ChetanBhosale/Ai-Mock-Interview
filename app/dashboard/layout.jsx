import React from "react";
import Header from "./_component/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-20 my-6 lg:mx-36 ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
