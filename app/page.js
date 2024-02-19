"use client"

import React, { useState, useEffect } from "react";
import AddressPage from "./components/AddressPage";
import BodyImage from "./components/BodyImage";
import DeliveryPage from "./components/DeliveryPage";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import MenuCateringPage from "./components/MenuCateringPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">

      <Introduction />
      <MenuCateringPage />
      <BodyImage />
      <DeliveryPage />
      <AddressPage />

      {/* <Footer /> */}
    </div>
  );
}
