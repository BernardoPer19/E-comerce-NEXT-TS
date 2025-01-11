import Filters from "@/components/Filters";
import React from "react";

 const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="my-16">
      <br />

      <section>{children}</section>
    </header>
  );
};


export default RootLayout