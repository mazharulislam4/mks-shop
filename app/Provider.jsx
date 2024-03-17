"use client";
import { NextUIProvider } from "@nextui-org/react";

function Provider({ children }) {

  


  return (
    <NextUIProvider>
      <>
        {children}
      </>
    </NextUIProvider>
  );
}

export default Provider;
