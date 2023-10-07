"use client"

import React, { useState, useEffect } from "react";
import AddressPage from "./components/AddressPage";
import BodyImage from "./components/BodyImage";
import DeliveryPage from "./components/DeliveryPage";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import MenuCateringPage from "./components/MenuCateringPage";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Introduction />
      <MenuCateringPage />
      <BodyImage />
      <AddressPage/>
      <DeliveryPage/>
    </div>
  );
}
