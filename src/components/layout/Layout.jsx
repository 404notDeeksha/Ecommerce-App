import React from "react";
import { MainHeader } from "../headers/mainHeader/MainHeader";
import { CategoryHeader } from "../headers/categoryHeader/CategoryHeader";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <MainHeader />
      <CategoryHeader />
      <Outlet />
      <Footer />
    </>
  );
};
